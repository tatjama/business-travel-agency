        const userCommentEl = document.getElementById('user-comment');
        const transportEl = document.getElementById('transport');
        const foodEl = document.getElementById('food');
        const safetyEl = document.getElementById('safety');
        const cultureEl = document.getElementById('culture');
        const airportEl = document.getElementById('airport');

        function showAddComment() {
            userCommentEl.style.display = "block";
        }
        function closeAddComment() {
            userCommentEl.style.display = "none";
        }
        function showLocalTransport() {
            transportEl.style.display = "block";
            foodEl.style.display = "none";
            safetyEl.style.display = "none";
            cultureEl.style.display = "none";
            airportEl.style.display = "none";
        }
        function showFood() {
            transportEl.style.display = "none";
            foodEl.style.display = "block";
            safetyEl.style.display = "none";
            cultureEl.style.display = "none";
            airportEl.style.display = "none";
        }
        function showSafety() {
            transportEl.style.display = "none";
            foodEl.style.display = "none";
            safetyEl.style.display = "block";
            cultureEl.style.display = "none";
            airportEl.style.display = "none";
        }
        function showLocalCulture() {
            transportEl.style.display = "none";
            foodEl.style.display = "none";
            safetyEl.style.display = "none";
            cultureEl.style.display = "block";
            airportEl.style.display = "none";
        }
        function showAirport() {
            transportEl.style.display = "none";
            foodEl.style.display = "none";
            safetyEl.style.display = "none";
            cultureEl.style.display = "none";
            airportEl.style.display = "block";
        }