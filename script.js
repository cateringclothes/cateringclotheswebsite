const cookiebox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".button");

    const executeCodes = () => {      
        // Wenn Cookie einmal bestätigt worden ist wird dieser nicht nochmal angezeigt werden außer die Seite wird neu geladen(Aktualisiert)      
        if(document.cookie.includes("codinglab")) return;
        cookiebox.classList.add("show");

        buttons.forEach((button) => { 
            button.addEventListener("click", () => { 
                cookiebox.classList.remove("show");
            
                if (button.id == "acceptBtn") {
                
                   document.cookie = "cookieBy= codinglab; max-age="+ 60 * 60 * 24 * 30;  
            }
        });   
    });
};  


//executeCodes function will be called on webpage load   
window.addEventListener("load", executeCodes)