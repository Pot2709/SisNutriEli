<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConocemeController extends Controller
{
    public function index()
    {
        return view('conoceme.index');
    }
}
