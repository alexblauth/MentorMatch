// const auth = firebase.auth();
// auth.signInWithEmailAndPassword(email, pass);

// auth.createUserWithEmailAndPassword(email, pass);

// auth.onAuthStateChanged(firebaseUser => {});

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCvsB1qBMOpUOG0XT9TM9ShTouhQjf_hZs",
        authDomain: "mentormatch-1551397019664.firebaseapp.com",
        databaseURL: "https://mentormatch-1551397019664.firebaseio.com",
        projectId: "mentormatch-1551397019664",
        storageBucket: "mentormatch-1551397019664.appspot.com",
        messagingSenderId: "94097431082"
    };
    firebase.initializeApp(config);

    const textEditEmail = document.getElementById('textEditEmail');
    const textEditPassword = document.getElementById('textEditPassword');
    const buttonLogin = document.getElementById('buttonLogin');
    const buttonSignUp = document.getElementById('buttonSignUp');
    const buttonGoogle = document.getElementById('googleButton');
    var clickedGoogleButton = false;

    buttonGoogle.addEventListener('click', e=>
    {
        clickedGoogleButton = true;
    })

    buttonLogin.addEventListener('click', e =>
    {
        const email = textEditEmail.value;
        const password = textEditPassword.value;
        const auth = firebase.auth();
        const answer = auth.signInWithEmailAndPassword(email, password);
        answer
            .catch(e => console.log(e.message));
    })

    buttonSignUp.addEventListener('click', e =>
    {
        console.log("clicked button sign up!~");
        const email = textEditEmail.value;
        const password = textEditPassword.value;
        const password2 = textEditPassword.value;
        if (password == password2)
        {
            const auth = firebase.auth();
            const answer = auth.createUserWithEmailAndPassword(email, password);
            answer
                .catch(e => console.log(e.message));
        }
    })

    // buttonToSignup.addEventListener('click', e =>
    // {
    //     window.location.href = "signup.html";
    // })

    // buttonToSignup.onclick =
    //     function () {
    //         location.href = "signup.html";
    //     };
    // firebase.auth().onAuthStateChanged(firebaseUser =>
    // {
    //     if (firebaseUser)
    //     {
    //         console.log("Sign up successful");
    //         // window.location.href = "index.html";
    //     }
    //     console.log("Not successful");
    // });

    buttonLogin.addEventListener('click', e =>
    {
        const email = textEditEmail.value;
        const password = textEditPassword.value;
        const auth = firebase.auth();
        const answer = auth.signInWithEmailAndPassword(email, password);
        if (answer)
            window.location.href = "index.html";
        answer
            .catch(e => console.log(e.message));
    })

    function onSignin(googleUser)
    {
        // Useful data for your client-side scripts:
        if (clickedGoogleButton)
        {
            var profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());
            const auth = firebase.auth();
            const answer = auth.
            // The ID token you need to pass to your backend:
            // var id_token = googleUser.getAuthResponse().id_token;
            // console.log("ID Token: " + id_token);
            window.location.href = "index.html";
        }
    }

