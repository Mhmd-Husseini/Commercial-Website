<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Orders_items;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function order(Request $request)
    {
        $shippingAddress = $request->input('shipping_address');
        $userId = $request->input('user_id');
        $cartItems = $request->input('cart_items');

        $order = Order::create([
            'shipping_address' => $shippingAddress,
            'user_id' => $userId,
        ]);
        $orderId = $order->id;   

        foreach ($cartItems as $cartItem) {
            Orders_items::create([
                'order_id' => $orderId, 
                'item_id' => $cartItem['item_id'],
                'quantity' => $cartItem['quantity'],
            ]);
        }

        return response()->json(['message' => 'Order created successfully'], 200);
    }
}
