var user = prompt("are you planing to visit jordan soon?");

function lab06b(jordan) {

    console.log(user);
    while (user !== 'yes' && user !== 'no') {

        user = prompt('choose yes / no');


    }

    if (jordan === 'yes') {
        alert('welcome');

    } else if (jordan === 'no') {

        alert('visit us later');
    }
}

lab06b(user);


