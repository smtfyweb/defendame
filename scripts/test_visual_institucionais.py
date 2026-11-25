import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

DIST_DIR = Path('/home/sfy/projetos/defendame/dist')

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Test Quem somos
        page = await browser.new_page(viewport={"width": 1280, "height": 900})
        quem_somos_url = f"file://{DIST_DIR / 'quem-somos' / 'index.html'}"
        await page.goto(quem_somos_url)
        title = await page.title()
        print(f"Quem somos Title: {title}")
        assert "Quem somos" in title, f"Invalid title: {title}"
        await page.screenshot(path="/home/sfy/projetos/defendame/dist/quem-somos-desktop.png", full_page=False)

        # Test Autor
        autor_url = f"file://{DIST_DIR / 'autor' / 'andre-l-silva' / 'index.html'}"
        await page.goto(autor_url)
        autor_title = await page.title()
        print(f"Autor Title: {autor_title}")
        assert "André L. Silva" in autor_title, f"Invalid title: {autor_title}"
        await page.screenshot(path="/home/sfy/projetos/defendame/dist/autor-desktop.png", full_page=False)

        # Mobile view test
        mobile_page = await browser.new_page(viewport={"width": 390, "height": 844})
        await mobile_page.goto(quem_somos_url)
        await mobile_page.screenshot(path="/home/sfy/projetos/defendame/dist/quem-somos-mobile.png", full_page=False)
        await mobile_page.goto(autor_url)
        await mobile_page.screenshot(path="/home/sfy/projetos/defendame/dist/autor-mobile.png", full_page=False)

        await browser.close()
        print("Visual verification passed successfully!")

if __name__ == '__main__':
    asyncio.run(main())
