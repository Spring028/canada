// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { User, Package, Settings, Phone, Share, LogOut, ChevronRight, MapPin, UserCircle } from 'lucide-react';
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

      {/* 功能菜单列表 */}
      <div className="bg-white border-t border-gray-200">
        {/* 个人资料 */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
          <UserCircle className="text-[#3B82F6] mr-3" size={24} />
          <div className="flex-1">
            <h3 className="text-base font-medium">个人资料</h3>
          </div>
          <ChevronRight className="text-[#3B82F6]" size={20} />
        </div>

        {/* 加拿大默认仓库 */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
          <MapPin className="text-[#3B82F6] mr-3" size={24} />
          <div className="flex-1">
            <h3 className="text-base font-medium">加拿大默认仓库</h3>
          </div>
          <ChevronRight className="text-[#3B82F6]" size={20} />
        </div>

        {/* 特殊空运地址管理 */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
          <Package className="text-[#3B82F6] mr-3" size={24} />
          <div className="flex-1">
            <h3 className="text-base font-medium">特殊空运地址管理</h3>
          </div>
          <ChevronRight className="text-[#3B82F6]" size={20} />
        </div>

        {/* 客服联系方式 */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100" onClick={handleContactClick}>
          <Phone className="text-[#3B82F6] mr-3" size={24} />
          <div className="flex-1">
            <h3 className="text-base font-medium">客服联系方式</h3>
          </div>
          <ChevronRight className="text-[#3B82F6]" size={20} />
        </div>

        {/* 关于我们 */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
          <User className="text-[#3B82F6] mr-3" size={24} />
          <div className="flex-1">
            <h3 className="text-base font-medium">关于我们</h3>
          </div>
          <ChevronRight className="text-[#3B82F6]" size={20} />
        </div>

        {/* 退出登录 */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100" onClick={handleLogout}>
          <LogOut className="text-[#3B82F6] mr-3" size={24} />
          <div className="flex-1">
            <h3 className="text-base font-medium">退出登录</h3>
          </div>
          <ChevronRight className="text-[#3B82F6]" size={20} />
        </div>

        {/* 分享应用 */}
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-50">
          <Share className="text-[#3B82F6] mr-3" size={24} />
          <div className="flex-1">
            <h3 className="text-base font-medium">分享应用</h3>
          </div>
          <ChevronRight className="text-[#3B82F6]" size={20} />
        </div>
      </div>

      {/* 底部导航栏 */}
      <TabBar activeTab="我的" $w={$w} />
    </div>;
};
export default Personal;