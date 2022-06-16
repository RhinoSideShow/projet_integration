# Journal De Bord Personel

## Nicolas Bergeron 1358189

---

### 2022-05-31
- Participer au scrum afin de mettre en oeuvre le sprint 0 (La phase de planification).<br>
- Debut du UML afin de nous donner une idee de la charge de travail a repartir.<br>
- Faite une maquette pour la page de login.<br>

#### Maquette
<img src="Image\Login.JPG" width="800" height="500" alt="Login">

---

### 2022-06-01

- Participer au scrum afin de mettre en oeuvre le sprint 0 (La phase de planification).<br>
- Finir du UML afin de nous donner une idee de la charge de travail a repartir.<br>
- Aprrentissage de nouvelle technologie sur internet (Intégration de Mongobd dans Next.js).<br>

---

### 2022-06-02

- Finis mon apprentissage de l'intégration de Mongodb dans Next.js.
- Finis le frontend des pages Login.js et Sign_In.js.
- Finis le routage pour les pages Login.js et Sign_In.js.
- Début du backend pour les pages Login.js et Sign_In.js.

#### Login.js
<img src="Image\Login2.JPG" width="800" height="500" alt="Login">

#### Sign_In.js

<img src="Image\SignIn.JPG" width="800" height="500" alt="Login">

---

### 2022-06-03

- Finis le frontend de la page Credit_Don.js.
- Finis le routage de la page Credit_Don.js.
- Finis animation de confirmation du don payer.

#### Credit_Don.js
<img src="Image\Don.JPG" width="800" height="500" alt="Login">

#### Animation Credit_Don.js
<img src="https://media.giphy.com/media/HeWWoi62mz9Baq35kZ/giphy.gif" width="800" height="500" alt="Login">

---

### 2022-06-05

- Finis le frontend de la page Credit_Cotisation.js.
- Finis le routage de la page Credit_Cotisation.js.
- Motifier l'animation de Animation_Credit_Don pour qu'il retourne différent "div" si le bouton clicker vien de Credit_Don.js. ou Credit_Cotisation.js.

---

### 2022-06-07

- Repris ce que Olivier(navbar) et Alain)(body) on faient pour la page principal et je l'ai améliorer.
- Finis une partie du backend de la page principal (mapper les projets sur la page principale).
- Finis le frontend et le backend de la page [projets].js
- Implementer un sticky div dans la page [projets].js pour que l'utilisateur voit le bouton donation même quand il scroll vers le bas.
- Routage du Login.js jusqu'à la page Credit_Don.js

#### page principal
<img src="Image\homepage.JPG" width="800" height="500" alt="homepage">

#### Page d'un projet
<img src="Image\projet.JPG" width="800" height="500" alt="projet">

#### [projets].js avec sticky div
<img src="https://media.giphy.com/media/6sUzbzq7U7xxuLsyyp/giphy.gif" width="800" height="500" alt="Login">

---

### 2022-06-08

- Changement de UI dans HomePage grace au routage tout dépendant le status d'adhésion de l'utilisateur ou s'il est un bénévole.
- Changer la façon comment récupérer les informations données dans Sign in pour que sa soit plus facile pour le routage.
- Implementation d'un checkup si l'utilisateur exist dans la base de données lors du Sign in. Si oui, l'utilisateur procède au HomePage sinon un message d'erreur apparait.
- Implementation du changement du status d'adhésion dans la base de données quand l'utilisateur à payer sa cotisation.
- Implementation du routage et du backend pour tout les utilisateurs (membres, admin, client) pour Credit_Don et Credit_Cotisation.
- Regler un bug dans [projets].js qui est quand l'utilisateur est undefied, les boutons pour un utilisateur admin apparaissent.

### 2022-06-09 (Journée avant présentation)

- Regler les problèmes de la Navbar au changement de résolution et aussi de bien placer les éléments de la navbar à des endroits appropier.
- Changement du CSS pour la Navba
- Implementation dans Navbar pour que sa soit les bon éléments qui apparaissent selon le status de l'utilisateur et sur quelle page l'utilisateur est.
- Ajouter user.png pour la Navbar. Quand un membre, admin ou bénévole est connecter, le mot connexion est changer pour un boutton avec user.png comme image dans la Navbar.
- Implémentation d'une dropDownList quand l'utilisateur click sur le bouton avec user.png. Les sous-menus sont Paramètres et Déconnexion.
- Création et implémentation du frontend, backend et routage de la page InformationClient.js. Elle a pour but de prendre les information d'un client avant qu'il fasse un don.
- Création et implémentation du frontend, backend et le routage de MotDePasseOublier.js. Il est appeler quand l'utilisateur click sur Mot de passe oublié ? dans le Sign in et permet à l'utilisateur à changer son mot de passe et il est enregistrer dans la base de données.
- Création des pages TOS qui veut dire, Condition d'utilisation, Politique de confidentialité et Cookies.
- Ajouter les 3 images pour les pages TOS
- Modifier le CSS dans la page new.js
- Lorsque l'utilisateur créer un projet, le projet est ajouter dans la section Vos projets et dans Top projets. Dans la section Vos projets, l'utilisateur voit seulement les projets qu'il a créer.
- Rajouter une fonction qui reload la page HomePage.js 1 fois.
- Vérification et réglage de bugs avant la présentation devant l'enseignant (Sylvain Labranche) le (2022-06-10).

### 2022-06-10

- Régler bug, lors de la création d'un projet. Le field dans la base de données, _fond, était un String quand il est supposer être un Double.
- Amélioré le CSS et le positionnement des données pour la page [projets].js

### 2022-06-14

- 