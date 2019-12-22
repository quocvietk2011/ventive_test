<?php

namespace App\Http\Controllers;

use App\FileUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use \File;

class FileUploadController extends Controller
{
    //
    public function index()
    {
        $files = FileUpload::orderBy('created_at', 'desc')->get();
        return response()->json($files);
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return View
     */
    public function show($id)
    {
        $file = FileUpload::find($id);
        if (!$file) {
            return response()->json([
                'message' => 'Sorry, file with id ' . $id . ' cannot be found.',
            ], 400);
        } else {
            $path = public_path('uploads/');
            $content = "file not found";
            if (File::exists($path . $file->filename)) {
                $content = get_file_info($file);
            }
            $file->content = $content;
        }

        return response()->json($file);
    }

    public function upload(Request $request)
    {
        $rs = [
            'error' => true,
            'file' => [],
        ];
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $orgName = $file->getClientOriginalName();
            $filename = pathinfo($orgName, PATHINFO_FILENAME);
            $extension = $file->getClientOriginalExtension();
            $fileNameWithExt = $filename . '_' . time() . '.' . $extension;
            Storage::disk('public')->put($fileNameWithExt, File::get($file));
            $path = storage_path('public/uploads/' . $fileNameWithExt);
            $upload = new FileUpload();
            $upload->title = $filename;
            $upload->author = "Viet Le";
            $upload->filename = $fileNameWithExt;
            $upload->extension = $extension;
            if ($upload->save()) {
                $upload->content = get_file_info($upload);
                $rs = [
                    'error' => false,
                    'file' => $upload,
                ];
            }
        }
        return response()->json($rs);
    }

}
