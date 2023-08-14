<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsCategorySeeder extends Seeder
{
    public function run()
    {
        $categories = ['أخبار', 'رياضة', 'ثقافة', 'اقتصاد', 'فيديو وصور'];

        foreach ($categories as $category) {
            DB::table('news_categories')->insert([
                'name' => $category,
            ]);
        }
    }
}
