import app from 'firebase/app';
import 'firebase/auth';

        var config = {
        apiKey: "AIzaSyDSgtlLeNZrXtmELIh4-3ndNcwOk1hghlw",
        authDomain: "give-away-stuff.firebaseapp.com",
        databaseURL: "https://give-away-stuff.firebaseio.com",
        projectId: "give-away-stuff",
        storageBucket: "give-away-stuff.appspot.com",
        messagingSenderId: "801401665311",
        appId: "1:801401665311:web:f6bb30cfd86f9e03"
    };

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }
    //AUTH API
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    //SIGN IN API
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    //SIGN OUT API
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;
