export const firebaseScript = `
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics-compat.js"></script>
  <script>
    const firebaseConfig = {
      apiKey: "${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}",
      authDomain: "${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}",
      projectId: "london-angel-investors",
      storageBucket: "${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}",
      messagingSenderId: "${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}",
      appId: "${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}",
      measurementId: "${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  </script>
`; 