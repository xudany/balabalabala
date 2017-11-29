
'use strict'

import Vue from 'vue'
import Router from 'vue-router'

// const meta = require('./meta.json')

Vue.use(Router)

// Route helper function for lazy loading
function route (path, view) {
  return {
    path: path,
    // meta: meta[path],
    component: resolve => require([`../pages/${view}_view.vue`], resolve)
  }
}

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [

      route('/', 'home'),

      route('/login', 'login'),

      // 行政管理
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000908?url_cache_key=d1f0eecb43443f679c375d34dc2f354e&action_entry_type=story_tree_list

      // 开店服务：商家申请列表、店铺申请列表
      route('/admin/business/merchant/list', 'admin_business_merchant_list'),
      route('/admin/business/merchant/trial', 'admin_business_merchant_trial'),
      route('/admin/business/merchant/retrial', 'admin_business_merchant_retrial'),

      route('/admin/business/store/list', 'admin_business_store_list'),
      route('/admin/business/store/trial', 'admin_business_store_trial'),
      route('/admin/business/store/retrial', 'admin_business_store_retrial'),

      // 商家管理：商家列表、商家组、商家圈
      route('/admin/merchant/list', 'admin_merchant_list'),
      route('/admin/merchant/add', 'admin_merchant_add'),
      route('/admin/merchant/checkout', 'admin_merchant_checkout'),
      route('/admin/merchant/edit', 'admin_merchant_edit'),

      route('/admin/merchant/group', 'admin_merchant_group'),
      route('/admin/merchant/group/add', 'admin_merchant_group_add'),
      route('/admin/merchant/group/relevance', 'admin_merchant_group_relevance'),
      route('/admin/merchant/circle', 'admin_merchant_circle'),
      route('/admin/merchant/circle/edit', 'admin_merchant_circle_edit'),
      route('/admin/merchant/circle/add', 'admin_merchant_circle_add'),

      // 用户管理: 角色管理、内部用户、外部用户
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000875?url_cache_key=d1f0eecb43443f679c375d34dc2f354e&action_entry_type=story_tree_list

      // 角色管理
      // 角色列表
      // 管理日志
      route('/users/roles/list', 'users_roles_list'),
      route('/users/roles/log', 'users_roles_log'),
      route('/users/roles/add', 'users_roles_add'),
      route('/users/roles/edit', 'users_roles_edit'),

      // 内部用户
      // 用户列表
      // 管理日志
      route('/users/inside/list', 'users_inside_list'),
      route('/users/inside/add', 'users_inside_add'),
      route('/users/inside/log', 'users_inside_log'),

      // 外部用户
      // 用户列表
      // 管理日志
      route('/users/outside/list', 'users_outside_list'),
      route('/users/outside/add', 'users_outside_add'),
      route('/users/outside/edit', 'users_outside_edit'),
      route('/users/outside/checkout', 'users_outside_checkout'),
      route('/users/outside/log', 'users_outside_log'),

      // 商品管理
      // 需求；https://www.tapd.cn/20259631/prong/stories/view/1120259631001000902?url_cache_key=d1f0eecb43443f679c375d34dc2f354e&action_entry_type=story_tree_list
      route('/currency/goods/list/on', 'currency_goods_list_on'),
      route('/currency/goods/list/offline', 'currency_goods_list_offline'),
      route('/currency/goods/detail', 'currency_goods_detail'),

      // 分类管理
      // 需求: https://www.tapd.cn/20259631/prong/stories/view/1120259631001000905?url_cache_key=d1f0eecb43443f679c375d34dc2f354e&action_entry_type=story_tree_list
      route('/category/goods', 'category_goods'),
      route('/category/goods/add', 'category_goods_add'),
      route('/category/goods/sublevel/add', 'category_goods_sublevel_add'),
      route('/category/goods/sublevel/edit', 'category_goods_sublevel_edit'),
      route('/category/store', 'category_store'),
      route('/category/store/add', 'category_store_add'),
      route('/category/store/sublevel/add', 'categry_store_sublevel_add'),
      route('/category/store/sublevel/edit', 'categry_store_sublevel_edit'),
      route('/category/meta', 'category_meta'),
      route('/category/brand', 'category_brand'),

      // 店铺管理：店铺列表、续签合同列表
      route('/admin/store/list', 'admin_store_list'),
      route('/admin/store/checkout', 'admin_store_checkout'),
      route('/admin/store/edit', 'admin_store_edit'),
      route('/admin/store/add', 'admin_store_add'),
      route('/admin/store/compact', 'admin_store_compact'),

      // 物流管理: 配送管理、人员管理、订单管理、统计管理
      // 需求；https://www.tapd.cn/20259631/prong/stories/view/1120259631001000911?url_cache_key=d1f0eecb43443f679c375d34dc2f354e&action_entry_type=story_tree_list
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001001077?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list

      // 物流: 配送管理、统计管理
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000978?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list

      // 配送管理
      route('/express/delivery/setting', 'express_delivery_setting'),
      route('/express/delivery/map', 'express_delivery_map'),
      route('/express/delivery/distribution', 'express_delivery_distribution'),
      route('/express/delivery/node', 'express_delivery_node'),

      // 订单管理

      // 配送订单
      route('/express/order/list', 'express_order_list'),
      route('/express/order/checkout', 'express_order_checkout'),
      route('/express/order/setup', 'express_order_setup'),

      // 催单记录
      route('/express/order/log', 'express_order_log'),
      route('/express/order/log/checkout', 'express_order_log_checkout'),

      // 催单设置
      route('/express/order/setting', 'express_order_setting'),

      // 配送评价
      route('/express/order/comment', 'express_order_comment'),

      // 人员管理
      // 跑腿员
      route('/express/role/errand', 'express_role_errand'),
      route('/express/role/errand/add', 'express_role_errand_add'),
      route('/express/role/errand/edit', 'express_role_errand_edit'),

      // 配送员
      route('/express/role/courier', 'express_role_courier'),
      route('/express/role/courier/add', 'express_role_courier_add'),
      route('/express/role/courier/edit', 'express_role_courier_edit'),

      // 统计管理
      // 平台配送
      route('/express/statistics/platform', 'express_statistics_platform'),
      route('/express/statistics/platform/checkout', 'express_statistics_platform_checkout'),

      // 自提卷码
      route('/express/statistics/coupon', 'express_statistics_coupon'),

      // 标签管理
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000914?url_cache_key=d1f0eecb43443f679c375d34dc2f354e&action_entry_type=story_tree_list
      route('/currency/label/list', 'currency_label_list'),
      route('/currency/label/add', 'currency_label_add'),
      route('/currency/label/edit', 'currency_label_edit'),
      route('/currency/label/group/list', 'currency_label_group_list'),
      route('/currency/label/group/add', 'currency_label_group_add'),

      // 订单管理
      route('/order/trade', 'order_trade'),
      route('/order/cancel', 'order_cancel'),
      route('/order/abnormity', 'order_abnormity'),
      route('/order/payment', 'order_payment'),
      route('/order/set', 'order_set'),

      // 售后单列表
      route('/after/list/intervention', 'after_list_intervention'),
      route('/after/list/manage', 'after_list_manage'),

      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000943?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list
      route('/currency/order/trade', 'currency_order_trade'),
      route('/currency/order/cancel', 'currency_order_cancel'),
      route('/currency/order/abnormity', 'currency_order_abnormity'),
      route('/currency/order/payment', 'currency_order_payment'),
      route('/currency/order/set', 'currency_order_set'),

      route('/order/trade', 'order_trade'),
      route('/order/cancel', 'order_cancel'),
      route('/order/abnormity', 'order_abnormity'),
      route('/order/payment', 'order_payment'),
      route('/order/set', 'order_set'),

      // 购物搜索
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001001079?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list
      route('/currency/search/shopping', 'currency_search_shopping'),
      route('/currency/search/information', 'currency_search_information'),

      // 售后单列表
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000968?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list
      route('/after/list/intervention', 'after_list_intervention'),
      route('/after/list/manage', 'after_list_manage'),

      // 资讯管理
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000998?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list
      route('/info/media/list', 'info_media_list'),
      route('/info/media/list/add', 'info_media_list_add'),
      route('/info/media/list/edit', 'info_media_list_edit'),
      route('/info/media/list/see', 'info_media_list_see'),
      route('/info/media/blocked', 'info_media_blocked'),
      route('/info/media/rank', 'info_media_rank'),
      route('/info/media/rank/detail', 'info_media_rank_detail'),
      route('/info/column', 'info_column'),
      route('/info/colum/add', 'info_colum_add'),
      route('/info/colum/edit', 'info_colum_edit'),
      route('/info/article/review', 'info_article_review'),
      route('/info/article/review/detail', 'info_article_review_detail'),
      route('/info/article/review/blocked/see', 'info_article_review_blocked_see'),
      route('/info/article/review/see', 'info_article_review_see'),
      route('/info/article/list', 'info_article_list'),
      route('/info/article/list/see', 'info_article_list_see'),
      route('/info/article/report', 'info_article_report'),
      route('/info/article/report/review', 'info_article_report_review'),
      route('/info/article/configure', 'info_article_configure'),
      route('/info/statistic/article', 'info_statistic_article'),
      route('/info/statistic/social', 'info_statistic_social'),

      // 营销管理：积分系统
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000990?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list
      // 积分系统
      // 积分设置
      route('/marketing/points/set', 'marketing_points_set'),
      // 积分记录
      route('/marketing/points/log', 'marketing_points_log'),

      // 店铺活动
      route('/marketing/shop/activity', 'marketing_shop_activity'),
      route('/marketing/shop/activity/detail', 'marketing_shop_activity_detail'),

      // 平台活动
      route('/marketing/platform/subsidy', 'marketing_platform_subsidy'),
      route('/marketing/platform/subsidy/activity/establish', 'marketing_platform_subsidy_activity_establish'),
      route('/marketing/platform/subsidy/activity/see', 'marketing_platform_subsidy_activity_see'),
      route('/marketing/platform/subsidy/centralit/establish', 'marketing_platform_subsidy_centralit_establish'),
      route('/marketing/platform/subsidy/centralit/see', 'marketing_platform_subsidy_centralit_see'),
      route('/marketing/platform/subsidy/centralit/success', 'marketing_platform_subsidy_centralit_success'),
      route('/marketing/platform/decrease', 'marketing_platform_decrease'),
      route('/marketing/platform/decrease/establish', 'marketing_platform_decrease_establish'),
      route('/marketing/platform/decrease/edit', 'marketing_platform_decrease_edit'),
      route('/marketing/platform/decrease/see', 'marketing_platform_decrease_see'),
      route('/marketing/platform/coupon', 'marketing_platform_coupon'),
      route('/marketing/platform/coupon/establish', 'marketing_platform_coupon_establish'),
      route('/marketing/platform/coupon/see', 'marketing_platform_coupon_see'),
      route('/marketing/platform/review', 'marketing_platform_review'),
      route('/marketing/platform/review/activity/detail', 'marketing_platform_review_activity_detail'),
      route('/marketing/platform/review/activity/see', 'marketing_platform_review_activity_see'),
      route('/marketing/platform/review/centralit/detail', 'marketing_platform_review_centralit_detail'),
      route('/marketing/platform/review/centralit/see', 'marketing_platform_review_centralit_see'),
      route('/marketing/platform/centralit', 'marketing_platform_centralit'),
      route('/marketing/platform/setting', 'marketing_platform_setting'),

      // 推广活动
      route('/marketing/promote/setting', 'marketing_promote_setting'),
      route('/marketing/promote/setting/add', 'marketing_promote_setting_add'),
      route('/marketing/promote/setting/edit', 'marketing_promote_setting_edit'),
      route('/marketing/promote/administration', 'marketing_promote_administration'),
      route('/marketing/promote/administration/see', 'marketing_promote_administration_see'),
      route('/marketing/promote/review', 'marketing_promote_review'),
      route('/marketing/promote/review/detail', 'marketing_promote_review_detail'),
      route('/marketing/promote/review/see', 'marketing_promote_review_see'),

      // 降价拍活动
      route('/marketing/reduce/activity', 'marketing_reduce_activity'),
      route('/marketing/reduce/activity/establish', 'marketing_reduce_activity_establish'),
      route('/marketing/reduce/activity/see', 'marketing_reduce_activity_see'),

      // 二维码活动
      route('/marketing/code/activity', 'marketing_code_activity'),
      route('/marketing/code/activity/establish', 'marketing_code_activity_establish'),
      route('/marketing/code/activity/see', 'marketing_code_activity_see'),

      // 财务管理：商家情况
      // 需求：https://www.tapd.cn/20259631/prong/stories/view/1120259631001000955?url_cache_key=6eb348049b04d57b14b9fe62b3447a23&action_entry_type=story_tree_list

      // 商家情况
      // 商家详情
      route('/finance/merchant/list', 'finance_merchant_list'),
      route('/finance/merchant/detail', 'finance_merchant_detail'),

      // 店铺保证金
      route('/finance/store/deposit', 'finance_store_deposit'),
      route('/finance/store/depositRecharge', 'finance_store_depositRecharge'),
      route('/finance/store/depositCharge', 'finance_store_depositCharge'),
      route('/finance/store/depositOperation', 'finance_store_depositOperation')

    ]
  })

  return router
}
