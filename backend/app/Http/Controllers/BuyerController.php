<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class BuyerController extends Controller
{
    function getLaptops(){
            $laptops = Items::all();
            return json_encode(["laptops" => $laptops]);
        }
        

}
