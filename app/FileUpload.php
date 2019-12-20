<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $filename
 * @property string $title
 * @property string $author
 * @property string $filetype
 * @property string $created_at
 * @property string $updated_at
 */
class FileUpload extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = [
        'title',
        'author',
        'filename',
        'extension',
        'created_at',
        'updated_at',
    ];
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */

}
