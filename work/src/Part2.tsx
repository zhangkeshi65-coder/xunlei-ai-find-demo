const img2025IcNavBarProfileNormal48 = "./assets/9e5f3e06-e6ca-41cb-adf0-08c1b4bf6ddd.svg";
const img2025IcNavBarVideoNormal48 = "./assets/c0ebbb81-94ac-499d-bbb0-4a6b1f9560ff.svg";
const img2025IcNavBarLinkNormal48 = "./assets/ee9099c0-69fe-4170-ba2f-6136c9daac00.svg";
const img2025IcNavBarCloudNormal48 = "./assets/db1aa36e-e7e4-420a-9926-4268035a3a57.svg";
const img2025IcNavBarTransferNormal48 = "./assets/d678a4c6-8589-4bed-af30-a1ec2002852d.svg";
const img2025IcNavBarHomeSelect48 = "./assets/3ea48458-1daa-49f1-adc3-c5496de3a036.svg";

function Component2025IcNavBarProfileNormal24({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="37:6307" data-name="2025_ic_nav_bar_profile_normal_24">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="37:6308" data-name="2025_ic_nav_bar_profile_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcNavBarProfileNormal48} />
      </div>
    </div>
  );
}

function Component2025IcNavBarVideoNormal24({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="37:6328" data-name="2025_ic_nav_bar_video_normal_24">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="37:6329" data-name="2025_ic_nav_bar_video_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcNavBarVideoNormal48} />
      </div>
    </div>
  );
}

function Component2025IcNavBarLinkNormal24({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="37:6323" data-name="2025_ic_nav_bar_link_normal_24">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="37:6324" data-name="2025_ic_nav_bar_link_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcNavBarLinkNormal48} />
      </div>
    </div>
  );
}

function Component2025IcNavBarCloudNormal24({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="37:6315" data-name="2025_ic_nav_bar_cloud_normal_24">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="37:6316" data-name="2025_ic_nav_bar_cloud_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcNavBarCloudNormal48} />
      </div>
    </div>
  );
}

function Component2025IcNavBarTransferNormal24({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="37:4941" data-name="2025_ic_nav_bar_transfer_normal_24">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="37:4942" data-name="2025_ic_nav_bar_transfer_normal_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcNavBarTransferNormal48} />
      </div>
    </div>
  );
}

function Component2025IcNavBarHomeSelect24({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="37:6311" data-name="2025_ic_nav_bar_home_select_24">
      <div className="absolute left-0 size-[24px] top-0" data-node-id="37:6312" data-name="2025_ic_nav_bar_home_select_48">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img2025IcNavBarHomeSelect48} />
      </div>
    </div>
  );
}

type ComponentProps = {
  className?: string;
  propValue?: "首页" | "短剧" | "传输" | "云盘" | "链接";
  propValue1?: "选中" | "未选中";
};

function Component({ className, propValue = "短剧", propValue1 = "未选中" }: ComponentProps) {
  const isAnd = propValue === "传输" && propValue1 === "未选中";
  const isAnd1 = propValue === "云盘" && propValue1 === "未选中";
  const isAnd2 = propValue === "链接" && propValue1 === "未选中";
  const isAnd3 = propValue === "短剧" && propValue1 === "未选中";
  const isAnd4 = propValue === "首页" && propValue1 === "选中";
  return (
    <div className={className || "content-stretch flex flex-col gap-[4px] items-center justify-center relative"} id={isAnd3 ? "node-37_6405" : isAnd2 ? "node-37_6402" : isAnd1 ? "node-37_6399" : isAnd ? "node-37_6396" : "node-37_6393"}>
      {isAnd4 && (
        <>
          <Component2025IcNavBarHomeSelect24 className="relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--2025_font/font_1,#111216)] text-center w-[24px]" data-node-id="37:6395">
            <p className="leading-[12px]">首页</p>
          </div>
        </>
      )}
      {isAnd && (
        <>
          <Component2025IcNavBarTransferNormal24 className="overflow-clip relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--2025_font/font_2,#65666a)] text-center w-[24px]" data-node-id="37:6398">
            <p className="leading-[12px]">下载</p>
          </div>
        </>
      )}
      {isAnd1 && (
        <>
          <Component2025IcNavBarCloudNormal24 className="relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--2025_font/font_2,#65666a)] text-center w-[24px]" data-node-id="37:6401">
            <p className="leading-[12px]">云盘</p>
          </div>
        </>
      )}
      {isAnd2 && (
        <>
          <Component2025IcNavBarLinkNormal24 className="overflow-clip relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--2025_font/font_2,#65666a)] text-center whitespace-nowrap" data-node-id="37:6404">
            <p className="leading-[12px]">链接库</p>
          </div>
        </>
      )}
      {isAnd3 && (
        <>
          <Component2025IcNavBarVideoNormal24 className="overflow-clip relative shrink-0 size-[24px]" />
          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--2025_font/font_2,#65666a)] text-center w-[24px]" data-node-id="37:6407">
            <p className="leading-[12px]">短剧</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-[var(--2025_background/background_elevated,white)] content-stretch flex flex-col items-center justify-end relative size-full" data-node-id="37:8296" data-name="底部导航">
      <div className="bg-[var(--2025_border/border_3,#f2f3f5)] h-px relative shrink-0 w-full" data-node-id="I37:8296;7406:4430" data-name="分割线" />
      <div className="grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[48px] relative shrink-0 w-full" data-node-id="I37:8296;7406:4431" data-name="图标">
        <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I37:8296;7406:4432" data-name="底导1">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[var(--space_4,4px)] items-center justify-center relative size-full">
            <Component className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" propValue="首页" propValue1="选中" />
          </div>
        </div>
        <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I37:8296;7406:4434" data-name="底导2">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[var(--space_4,4px)] items-center justify-center relative size-full">
            <Component className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" propValue="传输" />
          </div>
        </div>
        <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I37:8296;7406:4436" data-name="底导3">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[var(--space_4,4px)] items-center justify-center relative size-full">
            <Component className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" propValue="云盘" />
          </div>
        </div>
        <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I37:8296;7406:4438" data-name="底导4">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[var(--space_4,4px)] items-center justify-center relative size-full">
            <Component className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" propValue="链接" />
          </div>
        </div>
        <div className="col-5 justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I37:8296;7406:4460" data-name="底导4">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[var(--space_4,4px)] items-center justify-center relative size-full">
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-node-id="I37:8296;7790:5713" data-name="底部导航-图文组合">
              <Component2025IcNavBarProfileNormal24 className="relative shrink-0 size-[24px]" />
              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] h-[10px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--2025_font/font_2,#65666a)] text-center w-[24px]" data-node-id="I37:8296;7790:5713;5617:18315">
                <p className="leading-[12px]">我的</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[24px] items-center justify-end pb-[var(--space_8,8px)] pt-[var(--radius_12,12px)] px-[10px] relative shrink-0 w-full" data-node-id="I37:8296;7406:4440" data-name="Home Indicator">
        <div className="bg-[var(--2025_font/font_1,#111216)] h-[5px] relative rounded-[100px] shrink-0 w-[134px]" data-node-id="I37:8296;7406:4441" data-name="Home Indicator" />
      </div>
    </div>
  );
}
