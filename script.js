$(
    () => {
        let list=$("#list")
        let firstname=$("#firstname")
        let lastname=$("#lastname")
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/db",
            success: function (response) {
                console.log('success',response["users"][0]);
                $.each(response, (i, e)=>{
                });
            },
            error: (x)=>{
                alert("error loading database")
            }
        });
        

        $("#postit").click(()=>{
            let users={
                firstname: firstname.val(),
                lastname: lastname.val()
            };
            $.ajax({
                type: "POST",
                url:"http://localhost:3000/users",
                data: users,
                success: (newOrder)=>{
                    console.log("success")
                     list.append(`<li id="gg">${users["firstname"]}</li>`);
                    //  list.append(`<button id="delete">delete</button>`);
                },
                error: ()=>{
                    alert("unsuccessful")
                }
            })

        })
        // $("#delete").click(()=>{
        //     $("#gg").toggle()
        // })
        
        // let $vex=$("#vex")
        // $("#aja").click(()=>{
        //     $.ajax({
        //         type: "GET",
        //         url: "http://localhost:3000/db",
        //         success: (data)=>{
        //             console.log('success',data);
        //             $vex.append(`<p>${JSON.stringify(data["users"])}</p>`)
        //         }
        //     })
        // })

    }
);
    // $("body").css("background-color","black");
        // $("#aja").html("<em>button</em>");
        // $("#aja").prop("disabled", true);
        // $("#aja").clone().appendTo("body")


























/*

// let count=0
// $("aja").click(function(){
//     fetchDataAndDisplay();
// });
// function fetchDataAndDisplay(){
//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/posts",
//         method:"GET"
//     }).done((data)=>{
//         var start=count>0?5*count:count;
//         var end=start+end
//         var str=""
//         for (let i = start; i < end; i++) {
//             str+=`<div>User id = ${data[i].userId}<br />
//             id= ${data[i].id}<br />
//             title=${data[i].title}<br />
//             body=${data[i].body}<br />
//             </div>`
//         }
//         if(start>=data.length-5){
//             count=0
//         $(".display-data").append("List Traversed; Start )Over!");
//         return;

//         }
//         count++
//         $(".display-data").empty();
//         $(".display-data").append(str);

//     })
// }

// $(document).ready(function() {
//     $("#trigger").click(()=>{
//         $("#demo").html("Hello, World!");
//     })
// });*/
