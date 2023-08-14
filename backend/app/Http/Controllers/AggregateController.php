<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Click;
use Carbon\Carbon;
class AggregateController extends Controller
{
    public function calculateAggregates(Request $request)
    {
        $request->validate([
            'period' => 'required|string', 
        ]);

        $period = $request->input('period');
        $endDateTime = Carbon::now();
        $startDateTime = $endDateTime->copy()->sub($period);

        $aggregates = Click::whereBetween('created_at', [$startDateTime, $endDateTime])
            ->select('category_id', \DB::raw('COUNT(*) as total_clicks'), \DB::raw('COUNT(DISTINCT user_id) as unique_clicks'))
            ->groupBy('category_id')
            ->get();

        return response()->json(['data' => $aggregates]);
    }
}
