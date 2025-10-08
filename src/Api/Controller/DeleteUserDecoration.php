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

;
use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use Psr\Http\Message\ServerRequestInterface as Request;
use Xypp\UserDecoration\Api\Serializer\UserDecorationSerializer;
use Xypp\UserDecoration\Api\Serializer\UserOwnDecorationSerializer;
use Xypp\UserDecoration\UserDecoration;
use Xypp\UserDecoration\UserOwnDecoration;
use Illuminate\Support\Arr;


class DeleteUserDecoration extends AbstractDeleteController
{
    public $serializer = UserDecorationSerializer::class;
    protected function delete(Request $request)
    {
        $actor = RequestUtil::getActor($request);
        $id = Arr::get($request->getQueryParams(), 'id');
        $model = UserDecoration::findOrFail($id);
        $actor->assertCan("user.create_decoration");
        $model->delete();
    }
}
