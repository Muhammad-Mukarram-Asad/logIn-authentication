var name_input = document.getElementById("name");
var profile_input = document.getElementById("profile_url");
var email_input = document.getElementById("email_id");
var password_input = document.getElementById("password_id");

var button = document.getElementById("button_signUp");

var loginContainer = document.getElementById("loginContainer");
var signupContainer = document.getElementById("signUpContainer");
var friend_container = document.getElementById("friendContainer");

var Users = [];
var data_user;

// Create an array for storing the user data.

// creting an object and store the above values into it.

// var data;
// var a;
// var b;
// button.addEventListener("click", function (event) {
//   data = {
//     'name': name_input.value,
//     'profile': profile_input.value,
//     'email': email_input.value,
//     'password': password_input.value,
//     'friends': [],
//     'posts':[]
//   };

//   window.localStorage.setItem("dataKey", JSON.stringify(data));
//   a =  JSON.parse(window.localStorage.dataKey);

// Users.push(data);
// console.log(Users);
// window.localStorage.setItem('users_array',JSON.stringify(Users) );
//  b =  JSON.parse(window.localStorage.users_array);
// localStorage.removeItem('users_array');

//console.log(a);

// function data_user(name, email,pass)
// {
//   this.name = name;
//   this.email = email;
//   this.pass = pass;
// }

// var u1 = new data_user(name_input.value, email_input.value, password_input.value);
// Users.push(u1);
// console.log(Users);
// localStorage.setItem('userStorage',JSON.stringify(Users));

function displayLogin() {
  data_user = {
    name: name_input.value,
    profile: profile_input.value,
    email: email_input.value,
    password: password_input.value,
    friends: [],
    posts :[]
  };
  Users.push(data_user);
  console.log(Users);
  localStorage.setItem("storageArray", JSON.stringify(Users));
  loginContainer.style.display = "block";
  signupContainer.style.display = "none";

  // if(name_input.value == "")
  //   {
  //       alert("Plz fill the name text field. it is mandatory!!!");
  //       loginContainer.style.display = "none";
  //       signupContainer.style.display = "block";
  //   }
  //   else if(email_input.value == "")
  //       {
  //         alert("Plz fill the email field. it is mandatory!!!");
  //       loginContainer.style.display = "none";
  //       signupContainer.style.display = "block";

  //       }
  //   else if(password_input.value == "")
  //   {
  //     alert("Plz fill the password field. Otherwise you are not allowed to login.");
  //       loginContainer.style.display = "none";
  //       signupContainer.style.display = "block";

  //   }
  //   else
  //   {
  //     alert("Everything is alright. You are ready to login now.");

  // event.preventDefault();  This is very important. It prevents the form to reloaded.
}

function displaySignUp() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "block";
}

function simplyLogin()
{
  loginContainer.style.display = "block";
  signupContainer.style.display = "none";
}

var user_storage_array;

function checkingCredentails() {
  var loginEmail = document.getElementById("email_loginId");
  var loginPassword = document.getElementById("psw_loginId");
  user_storage_array = JSON.parse(localStorage.getItem("storageArray"));
  console.log("Local storage array is given below:");
  console.log(user_storage_array);

  // var verified_person = user_storage_array.find((element) => {
  //   if (
  //     element.email == loginEmail.value &&
  //     element.password == loginPassword.value
  //   ) {
  //     friend_container.style.display = "block";
  //     loginContainer.style.display = "none";
  //     console.log(verified_person);
  //     friendScreen();
  //   } else {
  //     alert("Sorry, something is wrong at somewhere.");
  //   }
  // });

  for (var i = 0; i < user_storage_array.length; i++) {
    if (
      (user_storage_array[i].email == loginEmail.value) &&
      (user_storage_array[i].password == loginPassword.value)
    )
    {

      friend_container.style.display = "block";
      loginContainer.style.display = "none";
      friendScreen();
    } 
    else 
    {
      alert("Sorry in-valid credentials");
    }
  }
}

// Friend's Screen Code:
var p = document.getElementById("friendNames_text");

function friendScreen() {
  var loginEmail = document.getElementById("email_loginId");
  var loginPassword = document.getElementById("psw_loginId");
  for (var i = 0; i < user_storage_array.length; i++) {
    if (
      (user_storage_array[i].email == loginEmail.value) &&
      (user_storage_array[i].password == loginPassword.value)
    )
    {

    
  var h1 = document.getElementById("friend_heading");
  var h2 = document.getElementById("ymk");
  h1.innerText = "Welcome to " + user_storage_array[i].name + " friends screen.";
  h2.innerText = "You May know them " + user_storage_array[i].name + " .";
}
  }
}

function addFriend() {
  var userName = prompt(" Enter the user name:");
  var friendName = prompt(" Enter the friend name:");

  for (var i = 0; i < Users.length; i++) {
    if (userName == Users[i].name) {
      Users[i].friends.push(friendName);
    }
    var res = Users[i].friends;
    p.innerHTML = res;
  }
  console.log(Users.friends);
}

function removeFriend() {
  var userName = prompt(" Enter the user name:");
  var friendName = prompt(" Enter the friend name:");

  for (var i = 0; i < Users.length; i++) {
    if (userName == Users[i].name) {
      var friend_index = Users[i].friends.indexOf(friendName); // finding the index of the friend
      console.log(friend_index);
      Users[i].friends.splice(friend_index, 1);
      console.log(Users[i].friends);
    } else {
      alert("there is no user with the given name.");
    }

    var res = Users[i].friends;
    p.innerHTML = res;
  }
  console.log(Users.friends);
}

function addthese(event) {
  var m = event.target;
  // var name_text = document.getElementById("label_text").innerHTML;

  var ans = m.parentElement.children[0].innerHTML;
  // console.log(m);

  console.log(" Add friend name is --> " + ans);
  var n = data_user.name;
  for (var i = 0; i < Users.length; i++) {
    if (n == Users[i].name) {
      Users[i].friends.push(ans);
    }
    var res = Users[i].friends;
    p.innerHTML = res;
  }
  console.log(data_user.friends);
}

function removethese(event) {
  var m = event.target;

  var ans = m.parentElement.children[0].innerHTML;

  console.log(" remove friend name was --> " + ans);
  var n = data_user.name;
  for (var i = 0; i < Users.length; i++) {
    if (n == Users[i].name) {
      var index_of_friend = Users[i].friends.indexOf(ans);
      Users[i].friends.splice(index_of_friend, 1);
    }
    var res = Users[i].friends;
    p.innerHTML = res;
  }
  console.log(data_user.friends);
}

// Post Screen code goes onwards from here:

var post_screen = document.getElementById("post_screen");

function postData() {
  post_screen.style.display = "block";
  friend_container.style.display = "none";

  // var description_text = document.getElementById('description');
  // var file_input = document.getElementById('input_file');
  // var post_array = data.posts.push(description_text.innerHTML, file_input.value);
  // console.log("The post of the user is = \n " + post_array);
}

function pushPostdata() {
  var description_text = document.getElementById("description");
  var file_input = document.getElementById("input_file");
  var post_array = data_user.posts.push(
    description_text.value,
    file_input.value
  );
  console.log(data_user.posts);
  console.log(data_user.posts.length);
}
