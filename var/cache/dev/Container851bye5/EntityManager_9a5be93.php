<?php

namespace Container851bye5;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder8ee5f = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer34574 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties5a0fc = [
        
    ];

    public function getConnection()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getConnection', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getMetadataFactory', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getExpressionBuilder', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'beginTransaction', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getCache', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getCache();
    }

    public function transactional($func)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'transactional', array('func' => $func), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->transactional($func);
    }

    public function commit()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'commit', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->commit();
    }

    public function rollback()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'rollback', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getClassMetadata', array('className' => $className), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'createQuery', array('dql' => $dql), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'createNamedQuery', array('name' => $name), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'createQueryBuilder', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'flush', array('entity' => $entity), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'clear', array('entityName' => $entityName), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->clear($entityName);
    }

    public function close()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'close', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->close();
    }

    public function persist($entity)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'persist', array('entity' => $entity), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'remove', array('entity' => $entity), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'refresh', array('entity' => $entity), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'detach', array('entity' => $entity), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'merge', array('entity' => $entity), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getRepository', array('entityName' => $entityName), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'contains', array('entity' => $entity), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getEventManager', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getConfiguration', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'isOpen', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getUnitOfWork', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getProxyFactory', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'initializeObject', array('obj' => $obj), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'getFilters', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'isFiltersStateClean', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'hasFilters', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return $this->valueHolder8ee5f->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer34574 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder8ee5f) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder8ee5f = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder8ee5f->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, '__get', ['name' => $name], $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        if (isset(self::$publicProperties5a0fc[$name])) {
            return $this->valueHolder8ee5f->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8ee5f;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder8ee5f;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8ee5f;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder8ee5f;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, '__isset', array('name' => $name), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8ee5f;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder8ee5f;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, '__unset', array('name' => $name), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder8ee5f;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder8ee5f;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, '__clone', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        $this->valueHolder8ee5f = clone $this->valueHolder8ee5f;
    }

    public function __sleep()
    {
        $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, '__sleep', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;

        return array('valueHolder8ee5f');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer34574 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer34574;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer34574 && ($this->initializer34574->__invoke($valueHolder8ee5f, $this, 'initializeProxy', array(), $this->initializer34574) || 1) && $this->valueHolder8ee5f = $valueHolder8ee5f;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder8ee5f;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder8ee5f;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
