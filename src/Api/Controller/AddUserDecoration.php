<?php
/*
 * This file is part of xypp/user-decoration.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


namespace Xypp\UserDecoration\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use Xypp\UserDecoration\Api\Serializer\UserDecorationSerializer;
use Xypp\UserDecoration\UserDecoration;
use Xypp\UserDecoration\UserOwnDecoration;
use Illuminate\Support\Arr;

class AddUserDecoration extends AbstractShowController
{
    public $serializer = UserDecorationSerializer::class;
    protected function data(Request $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertCan('user.create_decoration');
        $attributes = Arr::get($request->getParsedBody(), 'attributes', []);
        if (Arr::get($attributes, 'id')) {
            $newModel = UserDecoration::findOrFail(Arr::get($attributes, 'id'));
        } else {
            $newModel = new UserDecoration();
        }
        $newModel->name = Arr::get($attributes, 'name');
        $newModel->type = Arr::get($attributes, 'type');
        $newModel->desc = Arr::get($attributes, 'desc');
        $newModel->style = Arr::get($attributes, 'style');
        
        $newModel->save();
        return $newModel;
    }
}
