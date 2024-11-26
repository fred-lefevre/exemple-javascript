<?php
$img = [
    'kangourou.jpg',
    'koala.jpg',
    'ornithorynque.jpg'
];

$indiceAlea = rand(0, count($img) - 1);
echo $img[$indiceAlea];