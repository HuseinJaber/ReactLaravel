<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Click;

class ClickController extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'category' => 'required|string', // Add validation rules as needed
    ]);

    // Create a new click record
    Click::create([
        'category' => $request->input('category'),
        // Add other fields as needed
    ]);

    return response()->json(['message' => 'Click recorded successfully']);
}
}