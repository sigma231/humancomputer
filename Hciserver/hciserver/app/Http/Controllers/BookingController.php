<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\booking;

class BookingController extends Controller
{
    //
    public function makeBooking(Request $request){
        $booking = new booking;
        $booking->user_id = 1;
        $booking->property_id = $request->input('property_id');
        $booking->date = $request->input('day');
        $booking->time = $request->input('time');
        $booking->reason = $request->input('description');
        
        $booking->save();
        return "Saved Successfully";
    }
    public function retrieveBookings(Request $request){

        $booking = new booking;
        $bookinglist = $booking::all();
        return $bookinglist; 

    }
}
