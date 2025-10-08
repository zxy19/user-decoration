<?php
/*
 * This file is part of xypp/user-decoration.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


namespace Xypp\UserDecoration\Api\Serializer;


class UserAttributeSerializer
{

    public function __invoke($serializer, $user, $attributes)
    {
        $attributes['canOfferDecoration'] = $serializer->getActor()->can('user.offer_decoration');
        $attributes['canCreateDecoration'] = $serializer->getActor()->can('user.create_decoration');
        $attributes['canDeleteDecoration'] = $serializer->getActor()->can('user.delete_decoration');
        return $attributes;
    }
}
