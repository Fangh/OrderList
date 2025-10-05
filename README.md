# Pour modifier le code

1. C'est mieux d'avoir un IDE (logiciel fait pour modifier du code), exemple: VSCode.
2. Ensuite il suffis d'ouvrir le dossier général avec VScode.
3. Il faut nodeJS d'installé.

# Pour modifier la liste de produits

Si vous voulez ajouter ou retirer un produit ou changer son prix, aller dans le fichier `ProductList.js` et vous trouverez tous les produits, par ligne.
A vous de changer ou d'ajouter ou supprimer des lignes.



# Pour tester l'app

1. Une fois, il faut mettre à jour npm. Pour ça : Ouvrez le Terminal et tapez `npm update`.
2. Une fois, il faut mettre à jour les dépendances de manière soft. Pour ça : tapez `npm audit fix` .
3. Ensuite, à chaque fois que vous voulez tester, il faut lancer l'app dans votre navigateur : `npm start`.

# Si ça se lance pas au test

1. Si jamais ça marche pas, vous pouvez tenter un `npm audit fix --force` ce qui oblige à mettre à jour de manière violente (mais ça peux casser des trucs).
2. Ensuite, à chaque fois que vous voulez tester, il faut lancer l'app dans votre navigateur : `npm start`.
3. Si y'a toujours une erreur, cherchez avec votre moteur de recherche favoris.
4. Si vous n'y arrivez pas, cherchez un développeur nodeJS dans l'asso.
5. Si y'en a pas, envoyez un mail à fangh@ik.me (oui c'est moi).


# Pour déployer l'app sur le site web

1. Il faut que un.e administrateur.ice de l'application ai rajouté votre compte Google en tant que développeur.euse officiel de l'app. Envoyez un mail à fangh@ik.me pour demander gentillement.
2. Pour être sûr que c'est bon, allez sur https://console.firebase.google.com et vérifiez que vous voyez l'app Zinc De Trèfle
3. Une fois, il faut mettre à jour Firebase. Pour ça, ouvrez le Terminal et tapez `npm install -g firebase-tools`
4. Une fois, Il faut vous connecter à firebase via le Terminal. Pour ça, tapez `firebase login` ça va ouvrir votre navigateur web et vous allez choisir votre compte Google
5. A chaque fois, il faut builder l'application. Pour ça tapez `npm run build`
6. Si ça marche vous devriez voir écris "The build folder is ready to be deployed."
7. A chaque fois que vous voulez déployer cette build sur le site web, tapez `firebase deploy --only hosting`
8. Si ça marche vous devriez voir écris "Deploy complete!"
9. Pour vérifiez, aller sur le site https://zinc-de-trefle.web.app/


---




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).