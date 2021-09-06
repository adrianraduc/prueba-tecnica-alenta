<?php

namespace App\Controller;

use App\Repository\ImageRepository;
use App\Entity\Image;
use App\Repository\BookRepository;
use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\DateTime;

/**
 * @Route("/api/index"
 */
class BooksController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var BookRepository
     */
    private $bookRepository;
    /**
     * @var ImageRepository
     */
    private $imageRepostory;

    public function __construct(EntityManagerInterface $entityManager, BookRepository $bookRepository, ImageRepository $imageRepostory) {

        $this->entityManager = $entityManager;
        $this->bookRepository = $bookRepository;
        $this->imageRepostory = $imageRepostory;
    }

    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('books/index.html.twig', [
            'controller_name' => 'BooksController',
        ]);
    }

    /**
     * @Route("/import-books", name="import-books")
     */
    public function importBooks(Request $request)
    {

        try {
            $file = $request->files->get('myFile');
            $json = json_decode(file_get_contents($file), TRUE) ;

            $booksArray = array_values($json)[0];

            for($i = 0; $i < count($booksArray); $i++){
                $bookObject = new Book();

                $book = (object)array_values($booksArray)[$i];

                $date = new \DateTime($book->{'published'});

                $bookObject->setIsbn($book->{'isbn'});
                $bookObject->setTitle($book->{'title'});
                $bookObject->setSubtitle($book->{'subtitle'});
                $bookObject->setAuthor($book->{'author'});
                $bookObject->setPublished($date);
                $bookObject->setPublisher($book->{'publisher'});
                $bookObject->setPages($book->{'pages'});
                $bookObject->setDescription($book->{'description'});
                $bookObject->setWebsite($book->{'website'});
                $bookObject->setCategory($book->{'category'});

                $this->entityManager->persist($bookObject);
                $this->entityManager->flush();
            }

            return  $this->findAll();
        } catch (\Throwable $th) {
            return $this->json($th);
        }

    }

    /**
     * @Route("/isbn/{isbn}", name="find-by-isbn")
     */
    public function findByIsbn($isbn) {

        $imagesArray = [];
        $book = $this->bookRepository->findOneByIsbn($isbn);
        if($book !== null){
            $images = $this->imageRepostory->findByBookId($book->getId());

            foreach ($images as $image){
                $imagesArray[] = $image->toArray();
            }
            $bookToArray = $book->toArray();
            return new Response(json_encode($bookToArray), 200);
        } else {
            return new Response(json_encode($book), 200);
        }
        
    }

    /**
     * @Route("/category/{category}", name="find-all-by-category")
     */
    public function findAllByCategory($category)
    {
        $booksArray = [];
        $books = $this->bookRepository->findByCategory($category);

        if($books !== null){
            foreach ($books as $book){
                $imagesArray = [];
                $images = $this->imageRepostory->findByBookId($book->getId());
                
                foreach ($images as $image){
                    $imagesArray[] = $image->toArray();
                 }
                 
                 $book->setImages($imagesArray);
                 $booksArray[] = $book->toArray();
                }
                
                return new Response(json_encode($booksArray), 200);
            } else {
                return new Response(json_encode($books), 200);
            }
    }

    /**
     * @Route("/published-before/{date}", name="find-published-before-date")
     */
    public function findAByPublishedBeforeDate($date)
    {
        $booksArray = [];
        $books = $this->bookRepository->findAByPublishedBeforeDate($date);

        if($books !== null){
            foreach ($books as $book){
                $imagesArray = [];
                $images = $this->imageRepostory->findByBookId($book->getId());
                
                foreach ($images as $image){
                    $imagesArray[] = $image->toArray();
                 }
                 
                 $book->setImages($imagesArray);
                 $booksArray[] = $book->toArray();
                }

                return new Response(json_encode($booksArray), 200);
            } else {
                return new Response(json_encode($books), 200);
            }
    }

    /**
     * @Route("/find-all-books", name="find-all-books")
     */
    public function findAll()
    {
        $booksArray = [];
        $books = $this->bookRepository->findAll();

        if($books !== null) {
            foreach ($books as $book){
                $imagesArray = [];
                $images = $this->imageRepostory->findByBookId($book->getId());
    
                foreach ($images as $image){
                    $imagesArray[] = $image->toArray();
                }

                $book->setImages($imagesArray);
                $booksArray[] = $book->toArray();
            }
    
            return new Response(json_encode($booksArray), 200);
            
        } else {
            return new Response(json_encode($books), 200);
        }
    }

    /**
     * @Route("/create-new-book", name="create-new-book")
     */
    public function createNewBook(Request $request)
    {
        try {
            $book = new Book();
            $book->setTitle($request->request->get('title'));
            $book->setSubtitle($request->request->get('subtitle'));
            $book->setAuthor($request->request->get('author'));
            $book->setPublisher($request->request->get('publisher'));
            $book->setPublisher($request->request->get('publisher'));
            $book->setIsbn($request->request->get('isbn'));
            $book->setPages($request->request->get('pages'));
            $book->setPublished(new \DateTime($request->request->get('published')));
            $book->setCategory($request->request->get('category'));
            $book->setWebsite($request->request->get('website'));
            $book->setDescription($request->request->get('description'));

            $this->entityManager->persist($book);
            $this->entityManager->flush();

            $images = $request->files->get('images');

            foreach($images as $image){

                $imageEntity = new Image();
                /**
                 * @var UploadedFile $uploadedFile
                 */

                $uploadedFile = $image;
                $filenameElements = explode('.', $uploadedFile->getClientOriginalName());
                $extension = array_pop($filenameElements);
                $extension = strtolower($extension);
                $targetDir = $this->getParameter('kernel.project_dir').'/public/uploads/';
                $targetName = uniqid(rand(), true). "." .$extension;
                $targetPath = $targetDir . $targetName;

                while (file_exists($targetPath)) {
                    $targetName = uniqid(rand(), true). "." .$extension;
                    $targetPath = $targetDir . $targetName;
                }

               $uploadedImage = $uploadedFile->move($targetDir, $targetName);

               $imageEntity->setBookId($book->getId());
               $imageEntity->setFileRoute('/public/uploads/');
               $imageEntity->setFileName($targetName);

                $this->entityManager->persist($imageEntity);
                $this->entityManager->flush();
            }
            return  $this->json($book);
            }

        catch (\Throwable $th) {
            return $this->json($th);
        }
    }

    /**
     * @Route("/delete/{id}", name="delete-book")
     */
    public function deleteBook($id)
    {
        try {
            $booksArray = [];
            $book = $this->bookRepository->find($id);
            $images = $this->imageRepostory->findByBookId($id);
            
            foreach($images as $image){
                $this->entityManager->remove($image);
                $this->entityManager->flush();

                $targetPath = $this->getParameter('kernel.project_dir').$image->getFileRoute()."".$image->getFileName();
                while (file_exists($targetPath)) {
                    unlink($targetPath);
                }
            }
            
            $this->entityManager->remove($book);
            $this->entityManager->flush();
            
            $books = $this->bookRepository->findAll();
            
            if($books !== null) {
                foreach ($books as $book){
                    $imagesArray = [];
                    $images = $this->imageRepostory->findByBookId($book->getId());
                    
                    foreach ($images as $image){
                        $imagesArray[] = $image->toArray();
                    }
                    
                    $book->setImages($imagesArray);
                    $booksArray[] = $book->toArray();
                }
            }

            return new Response(json_encode($booksArray), 200);

        } catch (\Throwable $th) {
            return $this->json($th);
        }
    }
}