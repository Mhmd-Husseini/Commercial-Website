<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class BuyerController extends Controller
{
    public function laptops()
    {
        $laptops = Item::all();
        return response()->json(["laptops" => $laptops]);
    }
}
