# Projet Programmation Côté Client M1 MIASHS WIC S2

# Andrei Chirtes et Thomas Courouble

# Sujet: extensions multimédia

Afin d'améliorer notre liste de tâches, nous avons rajouté les fonctionnalités nécessaires pour la reconnaissance automatique des objets multimédia. 

Pour ce faire, nous avons créé des tests qui vérifient si le texte ajouté est un lien hypertexte et si c’est le cas, vérifient également s’il s’agit d’un fichier de type multimédia.

Par exemple, le texte https://www.facebook.com/ sera traité comme un lien hypertexte, ainsi que le texte http://www.noiseaddicts.com/samples_1w72b820/4190.mp3

Ensuite, nous avons classifié les objets multimédia en trois catégories : des images, des fichiers vidéo et des fichiers audio. 

# L’affichage des images
Pour les images, nous avons défini les extensions qui suivent : jpeg, jpg, gif et png.

Une fois le texte ajouté identifié comme étant une image, l’affichage de celui-ci dans la liste des tâches sera adaptée pour permettre et optimiser l’affichage de l’image.

Un exemple d’image qu’on pourrait ajouter : https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/1000px-AngularJS_logo.svg.png

Une fois l’image ajoutée, celle-ci est affichée en dessous de son hyperlien, en miniature et en opacité réduite ; en cliquant dessus, elle s’agrandi en adaptant ses dimensions à la largeur de notre liste des tâches. L’affichage est géré en CSS et javascript (style par classe, changement de classe en javascript)

Un deuxième clique remet l'image dans son état initial.

# L’affichage des fichiers vidéo 
Pour les fichiers vidéo, nous avons défini les extensions suivantes : .mp4, .mov, .ogv, .webm.

En rajoutant un lien qui est identifié comme étant un fichier vidéo, celui-ci est affiché dans une balise appropriée HTML5. La vidéo est initialement affichée en mode miniature, en pause et avec opacité réduite. En cliquant dessus, la dimension du lecteur vidéo est adaptée aux dimensions de notre liste des tâches, l’opacité est remise à 100% et la vidéo est lancée ; en cliquant encore une fois, la vidéo est remise en pause, les contrôles disparaissent et les dimensions et l’opacité sont réinitialisées.

Ce comportement est géré par des actions javascript. 

# La gestion des sons

Pour les fichiers de type son, nous avons utilisé les extensions suivantes :  .mp3, .ogg, .wav.

Un exemple de fichier de son : http://www.noiseaddicts.com/samples_1w72b820/4190.mp3 

Quand le texte ajouté à notre liste de tâches est identifié comme étant un lien pointant vers un fichier de type son, l’affichage de celui-ci est changé automatiquement afin d’intégrer une balise HTML5 adaptée. 

Celle-ci s’affichent en dessous du texte, dans notre liste, n’étant pas mise en marche automatiquement.

