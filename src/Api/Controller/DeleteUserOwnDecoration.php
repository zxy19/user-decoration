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
use Xypp\UserDecoration\Api\Serializer\UserOwnDecorationSerializer;
use Xypp\UserDecoration\UserOwnDecoration;
use Illuminate\Support\Arr;


class DeleteUserOwnDecoration extends AbstractDeleteController
{
    public $serializer = UserOwnDecorationSerializer::class;
    protected function delete(Request $request)
    {
        $actor = RequestUtil::getActor($request);
        $id = Arr::get($request->getQueryParams(), 'id');
        $model = UserOwnDecoration::findOrFail($id);
        if ($model->user_id != $actor->id) {
            $actor->assertCan("user.delete_decoration");
        }

        $user = User::findOrFail($model->user_id);
        if ($user->avatar_decoration == $model->decoration_id)
            $user->avatar_decoration = null;
        if ($user->name_decoration == $model->decoration_id)
            $user->name_decoration = null;
        if ($user->card_decoration == $model->decoration_id)
            $user->card_decoration = null;
        if ($user->post_decoration == $model->decoration_id)
            $user->post_decoration = null;
        if ($user->isDirty())
            $user->save();

        $model->delete();
    }
}
