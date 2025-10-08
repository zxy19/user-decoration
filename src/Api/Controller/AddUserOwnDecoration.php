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

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tobscure\JsonApi\Document;
use Xypp\UserDecoration\Api\Serializer\UserOwnDecorationSerializer;
use Xypp\UserDecoration\UserDecoration;
use Xypp\UserDecoration\UserOwnDecoration;
use Illuminate\Support\Arr;

class AddUserOwnDecoration extends AbstractCreateController
{
    public $serializer = UserOwnDecorationSerializer::class;
    protected function data(Request $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertCan('user.offer_decoration');
        
        $attributes = Arr::get($request->getParsedBody(), 'attributes', []);
        $newModel = new UserOwnDecoration();
        $newModel->user_id = Arr::get($attributes, 'user_id');
        $newModel->decoration_id = Arr::get($attributes, 'decoration_id');
        $dm = UserDecoration::findOrFail($newModel->decoration_id);
        $newModel->type = $dm->type;
        $newModel->save();
        return $newModel;
    }
}
