<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () 
{
    return view('home');
});

post('login', function(Illuminate\Http\Request $request) 
{
    if (Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')])) {
        return response()->json(['success' => true, 'message' => 'Login successfully performed'], 200);
    }

    return response()->json(['success' => false, 'message' => 'Unable to login'], 401);
});

Route::group(['middleware' => 'auth'], function() { 

    post('logout', function() 
    {
        Auth::logout();
        return response()->json(['success' => true, 'message' => 'You logout with success'], 200);
    });

    get('users', function() {
        $users = App\User::all();

        return response()->json(['success' => 'true', 'message' => 'Loading users', 'data' => ['users' => $users->toJson()]], 200);
    });
});
