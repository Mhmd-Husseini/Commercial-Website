<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;


class AdminController extends Controller
{
    public function laptops()
    {
        $laptops = Item::all();
        return response()->json(["laptops" => $laptops]);
    }
    function delete($id){
        $laptop = Item::find($id);
    
        if (!$laptop) {
            return response()->json(['error' => 'Record not found.'], 404);
        }
    
        $laptop->delete();
        return response()->json(['success' => true]);
    }
}    
