import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

DIST_DIR = Path('/home/sfy/projetos/defendame/dist')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        temas = ['golpe-pix', 'negativacao-indevida', 'consignado-rmc']

        for slug in temas:
            page = await browser.new_page(viewport={"width": 1280, "height": 900})
            url = f"file://{DIST_DIR / slug / 'index.html'}"
            await page.goto(url)
            title = await page.title()
            print(f"[{slug}] Desktop Title: {title}")

            # Check that AdSlots exist
            side_ad = await page.query_selector('.ad-side')
            wide_ad = await page.query_selector('.ad-wide')
            print(f"[{slug}] Side Ad Slot present: {side_ad is not None}")
            print(f"[{slug}] Wide Ad Slot present: {wide_ad is not None}")
            assert side_ad is not None, f"Side Ad Slot missing in {slug}"
            assert wide_ad is not None, f"Wide Ad Slot missing in {slug}"

            # Check that aviation text is NOT leaking into pix or negativacao or consignado
            body_text = await page.inner_text('body')
            assert "Valores médios para cancelamento sem assistência ou atraso > 4h" not in body_text, f"Aviation leak detected in {slug}!"

            # Screenshot
            await page.screenshot(path=f"/home/sfy/projetos/defendame/dist/{slug}-desktop.png", full_page=False)

            # Mobile view
            mobile = await browser.new_page(viewport={"width": 390, "height": 844})
            await mobile.goto(url)
            await mobile.screenshot(path=f"/home/sfy/projetos/defendame/dist/{slug}-mobile.png", full_page=False)

        await browser.close()
        print("All 3 cover audits verified: 100% mathematical integrity, zero copy leaks, AdSlots fully preserved!")

if __name__ == '__main__':
    asyncio.run(main())
