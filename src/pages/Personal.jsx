// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { User, Package, Settings, Phone, Mail, LogOut, ArrowRight } from 'lucide-react';
// @ts-ignore;
import { Button, Card, Avatar, AvatarImage, AvatarFallback, useToast } from '@/components/ui';

import TabBar from '@/components/TabBar';
const Personal = props => {
  const {
    toast
  } = useToast();
  const {
    navigateTo
  } = props.$w.utils;
  const currentUser = props.$w.auth.currentUser || {
    name: '访客',
    avatarUrl: ''
  };
  const handleOrdersClick = () => {
    toast({
      title: '运单管理',
      description: '正在打开运单页面'
    });
    navigateTo({
      pageId: 'orders',
      params: {}
    });
  };
  const handleSettingsClick = () => {
    toast({
      title: '设置',
      description: '正在打开设置页面'
    });
    navigateTo({
      pageId: 'settings',
      params: {}
    });
  };
  const handleContactClick = () => {
    toast({
      title: '联系方式',
      description: '正在打开联系方式页面'
    });
  };
  const handleLogout = () => {
    toast({
      title: '退出登录',
      description: '正在退出...'
    });
  };
  return <div className="bg-gray-50 min-h-screen pb-16">
      {/* 用户信息区域 */}
      <div className="bg-[#1E293B] text-white p-6">
        <div className="flex items-center">
          <Avatar className="w-16 h-16 mr-4">
            {currentUser.avatarUrl ? <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} /> : <AvatarFallback className="bg-[#3B82F6] text-white text-xl">
                {currentUser.name.charAt(0) || 'U'}
              </AvatarFallback>}
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">{currentUser.name || '访客用户'}</h2>
            <p className="text-sm text-gray-300">{currentUser.nickName || '未设置昵称'}</p>
          </div>
          <Button variant="ghost" className="text-white" onClick={handleSettingsClick}>
            <Settings size={24} />
          </Button>
        </div>
      </div>

      {/* 功能菜单 */}
      <div className="p-4 space-y-4">
        {/* 运单管理 */}
        <Card className="cursor-pointer hover:bg-gray-50" onClick={handleOrdersClick}>
          <div className="p-4 flex items-center">
            <Package className="text-[#3B82F6] mr-4" size={32} />
            <div className="flex-1">
              <h3 className="font-bold text-lg">我的运单</h3>
              <p className="text-sm text-gray-500">查看和管理所有运单</p>
            </div>
            <ArrowRight className="text-gray-500" size={20} />
          </div>
        </Card>

        {/* 联系方式 */}
        <Card className="cursor-pointer hover:bg-gray-50" onClick={handleContactClick}>
          <div className="p-4 flex items-center">
            <Phone className="text-[#3B82F6] mr-4" size={32} />
            <div className="flex-1">
              <h3 className="font-bold text-lg">联系方式</h3>
              <p className="text-sm text-gray-500">客服热线和在线客服</p>
            </div>
            <ArrowRight className="text-gray-500" size={20} />
          </div>
        </Card>

        {/* 邮箱设置 */}
        <Card className="cursor-pointer hover:bg-gray-50">
          <div className="p-4 flex items-center">
            <Mail className="text-[#3B82F6] mr-4" size={32} />
            <div className="flex-1">
              <h3 className="font-bold text-lg">邮箱设置</h3>
              <p className="text-sm text-gray-500">管理邮箱通知</p>
            </div>
            <ArrowRight className="text-gray-500" size={20} />
          </div>
        </Card>

        {/* 关于我们 */}
        <Card className="cursor-pointer hover:bg-gray-50">
          <div className="p-4 flex items-center">
            <User className="text-[#3B82F6] mr-4" size={32} />
            <div className="flex-1">
              <h3 className="font-bold text-lg">关于我们</h3>
              <p className="text-sm text-gray-500">了解E.R.Bridge服务</p>
            </div>
            <ArrowRight className="text-gray-500" size={20} />
          </div>
        </Card>
      </div>

      {/* 退出登录 */}
      <div className="p-4">
        <Button variant="destructive" className="w-full" onClick={handleLogout}>
          <LogOut className="mr-2" size={20} />
          退出登录
        </Button>
      </div>

      {/* 底部导航栏 */}
      <TabBar activeTab="我的" $w={$w} />
    </div>;
};
export default Personal;