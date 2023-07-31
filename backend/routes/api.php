<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(["prefix" => "users"], function(){
 Route::post('/register', [AuthController::class, "register"]);
 Route::post('/login', [AuthController::class, "login"]);
});

Route::group(["prefix" => "buyers"], function(){
    Route::get('/laptops', [BuyerController::class, "laptops"]);
    Route::post('/order', [OrderController::class, 'order']);
});


