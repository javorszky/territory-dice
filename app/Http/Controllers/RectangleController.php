<?php

namespace Territory\Http\Controllers;

use Territory\Rectangle;
use Illuminate\Http\Request;

class RectangleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'index';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        dd($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Territory\Rectangle  $rectangle
     * @return \Illuminate\Http\Response
     */
    public function show(Rectangle $rectangle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \Territory\Rectangle  $rectangle
     * @return \Illuminate\Http\Response
     */
    public function edit(Rectangle $rectangle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Territory\Rectangle  $rectangle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rectangle $rectangle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Territory\Rectangle  $rectangle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rectangle $rectangle)
    {
        //
    }
}
