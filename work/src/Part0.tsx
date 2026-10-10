const img2025IcCommonSearchNormal48 = "./assets/258af164-2635-4d27-be5d-f35dcdcb6959.svg";
const img2025IcCommonAddNormal48 = "./assets/7c701237-dbf9-4222-ad9f-bbdc18fe570f.svg";
const imgRectangle264723874 = "./assets/8006bb6e-ad3f-48f0-a011-111c3421ca63.svg";
const img2025IcCommonMessageNormal48 = "./assets/b3664df6-f8f0-4a26-924b-5e4469072d2c.svg";

const imgEllipse1114 = "./assets/f0d051c0-e2ef-4451-b20e-c2185b4c8527.png";
const imgImage336 = "./assets/a573dfa2-5c70-4375-b344-0d8e1fa87c7f.png";
const imgRightSide = "./assets/d8712069-2e82-4877-ad84-d27c23eeb083.svg";
const imgRectangle34624781 = "./assets/b150c284-3010-4b83-a109-2a6b0690feb0.svg";
const imgMaskGroup = "./assets/47a1ed36-27be-47e2-a788-327209dedd4c.svg";
const img = "./assets/e163e1ef-cfab-4f20-a346-c35967c50d0b.svg";
const imgSvip10 = "./assets/4f9a39fe-77f0-452e-9f02-007c80ca1f54.svg";
const img1 = "./assets/25e7052e-45f4-4a65-9c49-2ab99d263c19.svg";
const img2025IcCommonPagerNextNormal48 = "./assets/2a37307a-3aeb-4941-bbe9-c4706a9989e7.svg";

function Component2025IcCommonSearchHomeNormal12({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[12px]"} data-node-id="26:146513" data-name="2025_ic_common_search_home_normal_12">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-node-id="26:146514" data-name="2025_ic_common_search_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcCommonSearchNormal48} />
      </div>
    </div>
  );
}

function Component2025IcNavBarAddBold24({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="37:4880" data-name="2025_ic_nav_bar_add_bold_24">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="37:4881" data-name="2025_ic_common_add_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcCommonAddNormal48} />
      </div>
    </div>
  );
}

function Component2025IcNavBarWindowBold24({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="37:4876" data-name="2025_ic_nav_bar_window_bold_24">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="37:4877" data-name="2025_ic_common_window_normal_48">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-node-id="I37:4877;8304:4671">
          <div className="absolute inset-[-5%]">
            <img alt="" className="block max-w-none size-full" src={imgRectangle264723874} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2025IcNavBarMessageBold24({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="37:4868" data-name="2025_ic_nav_bar_message_bold_24">
      <div className="relative shrink-0 size-[24px]" data-node-id="37:4869" data-name="2025_ic_common_message_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcCommonMessageNormal48} />
      </div>
    </div>
  );
}

type ComponentProps = {
  className?: string;
  propValue?: boolean;
  propValue2?: "消息" | "加号";
};

function Component({ className, propValue = false, propValue2 = "消息" }: ComponentProps) {
  const is = propValue2 === "加号";
  const is1 = propValue2 === "消息";
  return (
    <div className={className || `relative size-[24px] ${is ? "" : "content-stretch flex flex-col gap-[6px] items-center justify-center"}`} id={is ? "node-37_4989" : "node-37_4984"}>
      {is1 && <Component2025IcNavBarMessageBold24 className="content-stretch flex flex-col items-start relative shrink-0" />}
      {is1 && propValue && (
        <div className="absolute bg-[var(--2025_functional/functional_error,#ff4d4f)] border border-[var(--2025_fill/fill_special_component,white)] border-solid content-stretch flex items-center justify-center overflow-clip px-[5px] right-[-8px] rounded-[24px] size-[16px] top-[-8px]" data-node-id="37:4986" data-name="2025_ic_badge_number_red_normal_16">
          <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[12px] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap" data-node-id="I37:4986;6289:4285">
            9
          </p>
        </div>
      )}
      {is && <Component2025IcNavBarAddBold24 className="absolute left-0 size-[24px] top-0" />}
    </div>
  );
}

export default function Component1() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-node-id="37:8250" data-name="顶部固定">
      <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-node-id="37:8251" data-name="Status Bar / iPhone 13 & 13 Pro">
        <div className="absolute h-[11.336px] right-[18.67px] top-[17.33px] w-[66.661px]" data-node-id="I37:8251;538:59396" data-name="Right Side">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightSide} />
        </div>
        <div className="absolute contents left-[24px] top-[12px]" data-node-id="I37:8251;538:59403" data-name="Left Side">
          <div className="absolute h-[21px] left-[24px] rounded-[24px] top-[12px] w-[54px]" data-node-id="I37:8251;538:59404" data-name="_Time">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] h-[20px] leading-[20px] left-[27px] not-italic text-[15px] text-[color:var(--m-fill/m-fill-black,black)] text-center top-px tracking-[-0.5px] w-[54px]" data-node-id="I37:8251;538:59404;538:59139">
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[44px] items-center justify-between pl-[12px] pr-[var(--space_6,6px)] relative shrink-0 w-full" data-node-id="37:8252" data-name="顶部导航">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I37:8252;15:9024" data-name="个人页入口">
          <div className="content-stretch flex gap-[11.25px] items-center relative shrink-0" data-node-id="I37:8252;15:9024;15:9680" data-name="用户头像">
            <div className="relative shrink-0 size-[36px]" data-node-id="I37:8252;15:9024;15:9680;9384:9759">
              <div className="absolute left-0 size-[36px] top-0" data-node-id="I37:8252;15:9024;15:9680;5791:11009">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="36" src={imgEllipse1114} width="36" />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute border-[0.4px] border-[rgba(255,255,255,0.2)] border-solid left-1/2 overflow-clip rounded-[144px] size-[36px] top-1/2" data-node-id="I37:8252;15:9024;15:9680;9384:10379" data-name="2025_ic_avatar_1_108">
                <div className="absolute left-[-0.2px] size-[36px] top-[-0.4px]" data-node-id="I37:8252;15:9024;15:9680;9384:10379;9364:5652" data-name="image 336">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-[-13.36%] max-w-none size-[126.69%] top-[-5.41%]" src={imgImage336} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--space_2,2px)] h-[34px] items-start justify-center relative shrink-0" data-node-id="I37:8252;15:9024;10:9024">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I37:8252;15:9024;10:9025">
              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] max-w-[90px] not-italic relative shrink-0 text-[13px] text-[color:var(--2025_font/font_1,#111216)] text-center whitespace-nowrap" data-node-id="I37:8252;15:9024;10:9026">
                <p className="leading-[18px]">麻辣小龙虾...</p>
              </div>
              <div className="h-[12px] overflow-clip relative rounded-[4.478px] shrink-0 w-[49.5px]" data-node-id="I37:8252;15:9024;10:9027" data-name="标识样式A">
                <div className="absolute h-[10.75px] left-[5.5px] top-[1.25px] w-[44px]" data-node-id="I37:8252;15:9024;10:9027;2754:5744">
                  <div className="absolute h-[10.533px] left-[-1.25px] top-[0.09px] w-[45.818px]" data-node-id="I37:8252;15:9024;10:9027;2754:5745">
                    <div className="absolute inset-[0_1.88%_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgRectangle34624781} />
                    </div>
                  </div>
                  <div className="absolute h-[10.533px] left-[-1.25px] top-[0.09px] w-[45.818px]" data-node-id="I37:8252;15:9024;10:9027;2754:5746" data-name="Mask group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaskGroup} />
                  </div>
                  <div className="absolute content-stretch flex gap-[0.597px] h-[5.969px] items-center left-[6.83px] top-[2.39px]" data-node-id="I37:8252;15:9024;10:9027;2754:5773">
                    <div className="h-[7.68px] relative shrink-0 w-[6.144px]" data-node-id="I37:8252;15:9024;10:9027;2754:5774" data-name="年费">
                      <div className="absolute inset-[0_-7.98%_-4.11%_-0.84%]">
                        <img alt="" className="block max-w-none size-full" src={img} />
                      </div>
                    </div>
                    <div className="h-[5.73px] relative shrink-0 w-[25.848px]" data-node-id="I37:8252;15:9024;10:9027;2754:5776" data-name="SVIP 10标识">
                      <div className="absolute inset-[0_0_-1.32%_0]">
                        <img alt="" className="block max-w-none size-full" src={imgSvip10} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[18.136px] left-[-1px] top-[-0.13px] w-[14.106px]" data-node-id="I37:8252;15:9024;10:9027;2754:5777" data-name="会员标识">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I37:8252;15:9024;10:9028">
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="I37:8252;15:9024;10:9030">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[color:var(--2025_font/font_3,#8e8f93)] text-center whitespace-nowrap" data-node-id="I37:8252;15:9024;10:9031">
                  <p className="leading-[12px]">已登录 2 台设备</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="I37:8252;15:9024;10:9032" data-name="2025_ic_arrow_right_normal_12">
                  <div className="absolute flex items-center justify-center right-0 size-[12px] top-0" data-node-id="I37:8252;15:9024;10:9032;8433:28700">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="relative size-[12px]" data-name="2025_ic_common_pager_next_normal_48">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcCommonPagerNextNormal48} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="I37:8252;11402:171816" data-name="右侧图标">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-node-id="I37:8252;11402:171817" data-name="消息">
            <Component className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 size-[24px]" />
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-node-id="I37:8252;11402:171819" data-name="窗口">
            <div className="relative shrink-0 size-[24px]" data-node-id="I37:8252;11402:171820" data-name="导航栏图标">
              <div className="absolute left-0 size-[24px] top-0" data-node-id="I37:8252;11402:171820;10038:9751" data-name="2025_ic_nav_bar_window_bold_24">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="I37:8252;11402:171820;10038:9751;10038:8675" data-name="2025_ic_common_window_normal_48">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-node-id="I37:8252;11402:171820;10038:9751;10038:8675;8304:4671">
                    <div className="absolute inset-[-5%]">
                      <img alt="" className="block max-w-none size-full" src={imgRectangle264723874} />
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] left-1/2 not-italic size-[24px] text-[12px] text-[color:var(--2025_font/font_1,#111216)] text-center top-1/2" data-node-id="I37:8252;11402:171820;10038:9751;10038:8675;8304:4672">
                    <p className="leading-[12px]">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-node-id="I37:8252;11402:171821" data-name="新建">
            <Component className="relative shrink-0 size-[24px]" propValue2="加号" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center pl-[12px] pt-[12px] relative shrink-0 w-[366px]" data-node-id="37:8253">
        <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[32px]" data-node-id="37:8254">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="37:8255">
            <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--2025_font/font_1,#111216)] whitespace-nowrap" data-node-id="37:8256">
              搜索
            </p>
          </div>
          <div className="bg-[var(--2025_primary/primary_normal,#226df5)] h-[1.5px] relative rounded-[999px] shrink-0 w-[16px]" data-node-id="37:8257" />
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0" data-node-id="37:8258">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="37:8259">
            <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--2025_font/font_3,#8e8f93)] whitespace-nowrap" data-node-id="37:8260">
              找一找
            </p>
          </div>
          <div className="h-[1.5px] relative rounded-[999px] shrink-0 w-[16px]" data-node-id="37:8261" />
        </div>
        <div className="absolute content-stretch flex h-[12px] items-center justify-center left-[110px] pb-[2px] pt-px px-[5px] rounded-br-[10px] rounded-tl-[6px] rounded-tr-[10px] top-[19px] w-[10px]" data-node-id="37:8262" style={{ backgroundImage: "linear-gradient(268.3284649336456deg, rgb(2, 118, 225) 4.1215%, rgb(73, 122, 238) 49.589%, rgb(205, 140, 255) 87.814%, rgb(221, 177, 255) 119.7%)" }}>
          <p className="[word-break:break-word] font-['PingFang_SC:Semibold'] leading-[9px] not-italic relative shrink-0 text-[6px] text-[color:var(--2025_font/font_light,white)] whitespace-nowrap" data-node-id="37:8263">
            世界上没有难找的资源
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center pb-[var(--space_12,12px)] pt-[8px] relative shrink-0 w-full" data-node-id="37:8264" data-name="搜索">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px pl-[12px] relative" data-node-id="37:8265">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pr-[var(--space_12,12px)] relative" data-node-id="37:8266">
            <div className="bg-[var(--2025_fill/fill_white,white)] border border-[var(--2025_primary/primary_normal,#226df5)] border-solid content-stretch flex flex-col items-center justify-center px-[10px] py-[7px] relative rounded-[var(--border-radius-l,12px)] shrink-0 w-full" data-node-id="37:8267" data-name="输入搜索框">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="37:8268">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="37:8269">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--2025_font/font_3,#8e8f93)] whitespace-nowrap" data-node-id="37:8272">
                    常用站点
                  </p>
                </div>
                <div className="content-stretch flex gap-[var(--space_8,8px)] items-center justify-end relative shrink-0 w-[144.5px]" data-node-id="37:8273">
                  <div className="bg-[var(--2025_fill/fill_2,rgba(12,24,49,0.06))] content-stretch flex items-center justify-center px-[var(--space_12,12px)] py-[6px] relative rounded-[60px] shrink-0" data-node-id="37:8275">
                    <Component2025IcCommonSearchHomeNormal12 className="overflow-clip relative shrink-0 size-[12px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
