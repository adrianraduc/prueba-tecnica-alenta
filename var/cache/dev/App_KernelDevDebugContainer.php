<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container851bye5\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container851bye5/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container851bye5.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container851bye5\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \Container851bye5\App_KernelDevDebugContainer([
    'container.build_hash' => '851bye5',
    'container.build_id' => '25a64baa',
    'container.build_time' => 1630884597,
], __DIR__.\DIRECTORY_SEPARATOR.'Container851bye5');