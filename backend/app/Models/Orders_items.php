<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders_items extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'item_id',
        'user_id', 
        'quantity',   ];
}
