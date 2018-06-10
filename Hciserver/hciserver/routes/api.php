<?php

use Illuminate\Http\Request;
use App\Controllers\BookingController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/bookings', array('middleware' => 'cors', 'uses' => 'BookingController@makeBooking'));
Route::get('/my_bookings', array('middleware' => 'cors', 'uses' => 'BookingController@retrieveBookings'));
