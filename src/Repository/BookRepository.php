<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }

    // /**
    //  * @return Book[] Returns an array of Book objects
    //  */
    public function findAByPublishedBeforeDate($date)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.published < :val')
            ->setParameter('val', $date)
            ->orderBy('b.id', 'ASC')
            ->getQuery()
            ->getResult()
            ;

    }

    // /**
    //  * @return Book[] Returns an array of Book objects
    //  */
    public function findByCategory($category)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.category = :val')
            ->setParameter('val', $category)
            ->orderBy('b.id', 'ASC')
            ->getQuery()
            ->getResult()
            ;


    }


    public function findOneByIsbn($isbn): ?Book
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.isbn = :val')
            ->setParameter('val', $isbn)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }
}
