<?php

if (!function_exists('get_file_info')) {
    function get_file_info($file)
    {
        $ext = $file->extension;
        $filename = $file->filename;
        $path = public_path('uploads/');
        switch ($ext) {
            case 'txt':
            case 'doc':
            case 'docx':
                return file_get_contents($path . $file->filename);
                break;
            default:
                return url('uploads', $file->filename);
        }
    }
}
