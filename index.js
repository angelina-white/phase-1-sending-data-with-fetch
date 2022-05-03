// Add your code here

/*
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) 
    {
        return response.json();
    })
    .then(function (object) 
    {
        console.log(object);
    })
    .catch(function (error) 
    {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });
    */

    /*
    const formData = 
    {
        name: "Steve",
        email: "steve@steve.com",
    };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      */


    function submitData(name, email)
    {
        return fetch("http://localhost:3000/users", 
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(
            {
                    name: name,
                    email: email,
            }),
        })
        .then(function (response) 
        {
            return response.json();
        })
        .then(function (object) 
        {
            document.body.append(object.id)
        })
        .catch(function (error)
        {
            const message = error.message;
            document.body.innerHTML = message;
        });
    }

//submitData("Steve", "steve@steve.com")