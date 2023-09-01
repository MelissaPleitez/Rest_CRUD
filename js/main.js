function app() {
    const form = document.querySelector("#form");
  
    form.addEventListener("submit", addingMoviesBooks);
  
    function addingMoviesBooks(e) {
      e.preventDefault();
  
      const autor = document.querySelector("#autor").value;
      const title = document.querySelector("#title").value;
      const score = document.querySelector("#score").value;
      const description = document.querySelector("#description").value;
      const img = document.querySelector("#img").value;
  
      const objectMV = {
        autor,
        title,
        score,
        description,
        img
      };
      const verify = verifying(objectMV);
  
      if (verify) {
        error_message("Error");
        return;
      }

      addingObject(objectMV)
      showingObject()
    }
  
    function verifying(objectMV) {
      return !Object.values(objectMV).every((info) => info !== "");
    }
  
    function error_message(message) {
    console.log(message)
    }

    function addingObject(objectMV){

        const API= "http://localhost:3000/movies&books"

        try {

            fetch(API, {
                method: 'POST',
                body: JSON.stringify(objectMV),
                headers:{
                    'Content-Type': 'application/json'
                }
    
            })
            
        } catch (error) {
            console.log(error)
        }

    }

    async function showingObject(){

        const API= "http://localhost:3000/movies&books"

        try {

            const response = await fetch(API)
            const results= await response.json()


            console.log(results)
            
        } catch (error) {
            console.error(error)
        }

    }

  }


  
  app()
  