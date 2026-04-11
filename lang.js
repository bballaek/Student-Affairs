/**
 * lang.js — Thai / English language switcher
 * Usage: add data-i18n="key" to elements with text content
 *        add data-i18n-html="key" to elements with HTML content
 *        add data-i18n-placeholder="key" to inputs/textareas
 *        add data-i18n-title="key" to elements with title attribute
 */

const translations = {
  th: {
    /* ── Navigation ── */
    'logo.main': 'กลุ่มภารกิจกิจการนิสิต',
    'logo.sub': 'คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    'nav.home': 'หน้าหลัก',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.scholarships': 'สวัสดิการนิสิต',
    'nav.staff': 'บุคลากร',
    'nav.projects': 'โครงการ',
    'nav.activities': 'กิจกรรม',
    'nav.contact': 'ติดต่อเรา',
    'nav.login': 'เข้าสู่ระบบ',

    /* ── Breadcrumb ── */
    'breadcrumb.home': 'หน้าหลัก',

    /* ── Footer ── */
    'footer.brand.h3': 'กลุ่มภารกิจกิจการนิสิต',
    'footer.brand.p': 'คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    'footer.address': '254 ถนนพญาไท แขวงวังใหม่<br>เขตปทุมวัน กรุงเทพฯ 10330<br><br>โทร: 0-2218-2400<br>อีเมล: <a href="mailto:studentaffairs.edu@chula.ac.th">studentaffairs.edu@chula.ac.th</a>',
    'footer.services': 'บริการ',
    'footer.services.scholarship': 'ทุนการศึกษา',
    'footer.services.welfare': 'สวัสดิการนิสิต',
    'footer.services.projects': 'โครงการ',
    'footer.services.system': 'ระบบนิสิต',
    'footer.about': 'เกี่ยวกับ',
    'footer.about.history': 'ประวัติหน่วยงาน',
    'footer.about.staff': 'บุคลากร',
    'footer.about.news': 'ข่าวสาร',
    'footer.links': 'ลิงก์ที่เกี่ยวข้อง',
    'footer.links.edu': 'คณะครุศาสตร์',
    'footer.links.chula': 'จุฬาลงกรณ์มหาวิทยาลัย',
    'footer.links.reg': 'ระบบ Reg Chula',
    'footer.links.privacy': 'นโยบายข้อมูลส่วนบุคคล',
    'footer.copyright': 'Copyright © 2568 | กลุ่มภารกิจกิจการนิสิต คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    'footer.dev': 'พัฒนาโดย หน่วยเทคโนโลยีสารสนเทศ',

    /* ── Scroll to top ── */
    'scroll.top': 'กลับด้านบน',

    /* ── index2.html ── */
    'index.hero.title': 'กลุ่มภารกิจกิจการนิสิต',
    'index.hero.subtext': 'ส่งเสริมกิจกรรมของนิสิต ดูแลสวัสดิการ และระบบดูแลที่ครอบคลุม เพื่อให้นิสิตค้นหาตัวตน พัฒนาความสามารถ และเติบโตอย่างมีคุณภาพ',
    'index.hero.btn.about': 'เกี่ยวกับเรา',
    'index.about.kicker': 'ที่มา',
    'index.about.h2': 'กลุ่มภารกิจ<br><em>กิจการนิสิต</em>',
    'index.about.p': 'กลุ่มภารกิจกิจการนิสิต มีภารกิจหลักในการจัดบริการส่งเสริมชีวิตและความเป็นอยู่ของนิสิตในขณะศึกษาในมหาวิทยาลัย โดยมีเป้าหมายที่จะพัฒนานิสิตให้เป็นผู้มีคุณภาพ คุณธรรม คุณค่า และความพร้อมในการพัฒนาตนเองให้เป็นบัณฑิตที่สมบูรณ์ มีความรู้คู่คุณธรรม',
    'index.about.cta': 'อ่านเพิ่มเติม',
    'index.marquee.scholarship': 'ทุนการศึกษา',
    'index.marquee.welfare': 'สวัสดิการนิสิต',
    'index.marquee.activities': 'กิจกรรมพัฒนาตน',
    'index.marquee.leadership': 'ภาวะผู้นำ',
    'index.marquee.volunteer': 'จิตอาสา',
    'index.marquee.insurance': 'ประกันสุขภาพ',
    'index.marquee.service': 'บริการนิสิต',
    'index.marquee.projects': 'โครงการพัฒนา',
    'index.welfare.h2': 'สวัสดิการนิสิต',
    'index.welfare.p': 'บริการและสิทธิประโยชน์ที่นิสิตทุกคนสามารถเข้าถึงได้ ตลอดการศึกษาในมหาวิทยาลัย',
    'index.welfare.seeall': 'ดูรายละเอียดทั้งหมด',
    'index.welfare.card1.h4': 'ทุนการศึกษา',
    'index.welfare.card1.p': 'ทุนอุดหนุน ทุนภูมิพล ทุนจุฬาสงเคราะห์ ทุนอาหารกลางวัน และทุนจากหน่วยงานภายนอก',
    'index.welfare.card2.h4': 'ประกันและสุขภาพ',
    'index.welfare.card2.p': 'ประกันอุบัติเหตุ หลักประกันสุขภาพ รพ.จุฬาฯ และประกันนิสิตต่างชาติ',
    'index.welfare.card3.h4': 'การจ้างงานพิเศษ',
    'index.welfare.card3.p': 'เปิดโอกาสให้นิสิตทำงานกับมหาวิทยาลัย ค่าตอบแทน 100 บาท/ชั่วโมง',
    'index.welfare.card4.h4': 'บริการนิสิต',
    'index.welfare.card4.p': 'บัตรติดรถยนต์ การผ่อนผันทหาร และการขอใช้ยานพาหนะสำหรับกิจกรรม',
    'index.news.kicker': 'อัปเดตล่าสุด',
    'index.news.h2': 'ข่าวสารและกิจกรรม',
    'index.news.seeall': 'ดูทั้งหมด',
    'index.news.tag1': 'ทุนการศึกษา',
    'index.news.item1.h3': 'เปิดรับสมัครทุนการศึกษาประเภทอุดหนุนการศึกษา ภาคต้น ปีการศึกษา 2568',
    'index.news.item1.p': 'สำหรับนิสิตที่มีความจำเป็นทางการเงินและมีผลการเรียนตามเกณฑ์ที่กำหนด สามารถยื่นใบสมัครได้ที่กลุ่มภารกิจกิจการนิสิต',
    'index.news.readmore': 'อ่านต่อ',
    'index.news.item2.h4': 'กำหนดการต่ออายุประกันสุขภาพนิสิตต่างชาติ ภาคต้น 2568',
    'index.news.item2.p': 'ติดตามรายละเอียดเอกสารและระยะเวลาที่เกี่ยวข้อง',
    'index.news.item3.h4': 'โครงการพัฒนาทักษะความเป็นผู้นำนิสิตครู ครั้งที่ 12',
    'index.news.item3.p': 'กิจกรรมเสริมสร้างภาวะผู้นำ การทำงานร่วมกัน และการเติบโตเชิงวิชาชีพ',
    'index.news.item4.h4': 'ประกาศรายชื่อผู้ได้รับรางวัลนิสิตทำชื่อเสียงให้มหาวิทยาลัย',
    'index.news.item4.p': 'ยกย่องนิสิตที่สร้างผลงานดีเด่นในปีการศึกษา 2567',

    /* ── about.html ── */
    'about.breadcrumb.current': 'เกี่ยวกับเรา',
    'about.h1': 'เกี่ยวกับเรา',
    'about.subdesc': 'ประวัติ วิสัยทัศน์ พันธกิจ และเป้าหมายของกลุ่มภารกิจกิจการนิสิต',
    'about.intro.h2': 'มุ่งพัฒนา<em>นิสิต</em><br>ในทุกมิติ',
    'about.intro.p1': 'กลุ่มภารกิจกิจการนิสิต มีภารกิจหลักในการจัดบริการส่งเสริมชีวิตและความเป็นอยู่ของนิสิตขณะศึกษาในมหาวิทยาลัย โดยมีเป้าหมายพัฒนานิสิตให้เป็นผู้มีคุณธรรม คุณค่า และความพร้อมในการเติบโตเป็นบัณฑิตที่สมบูรณ์ มีความรู้คู่คุณธรรม',
    'about.intro.p2': 'ดำเนินงานผ่าน 9 ภารกิจหลัก ได้แก่ กิจกรรมนิสิตสัมพันธ์ สวัสดิการนิสิต วินัยนิสิต พัฒนานิสิต กิจกรรมพิเศษ ประสานงาน กนค. และ กนบค. ประสานงานนิสิตเก่า สารบรรณและงบประมาณ และภารกิจพิเศษ',
    'about.missions.h2': '9 ภารกิจหลัก',
    'about.mission1.h3': '1. กิจกรรมและนิสิตสัมพันธ์',
    'about.mission1.p': 'ส่งเสริมให้นิสิตพัฒนาตนเองเป็นสมาชิกที่ดีของสังคม ผ่านคณะกรรมการนิสิต 5 ฝ่าย ได้แก่ วิชาการ กีฬา ศิลปวัฒนธรรม นิสิตสัมพันธ์ และพัฒนาสังคม',
    'about.mission2.h3': '2. สวัสดิการนิสิต',
    'about.mission2.p': 'จัดหาทุนการศึกษา การจ้างงานพิเศษ 100 บาท/ชม. ประกันอุบัติเหตุ บริการที่พัก และระบบให้คำปรึกษาด้านการเรียนและชีวิต',
    'about.mission3.h3': '3. วินัยนิสิต',
    'about.mission3.p': 'ส่งเสริมระเบียบวินัย ค่านิยมที่พึงประสงค์ด้านการแต่งกาย กิริยามารยาท และการดูแลสาธารณสมบัติ พร้อมให้คำปรึกษาและแก้ปัญหา',
    'about.mission4.h3': '4. พัฒนานิสิต',
    'about.mission4.p': 'จัดกิจกรรมพัฒนาจิต กาย และบุคลิกภาพ รวมถึงกิจกรรมปฏิบัติธรรมและการเจริญปัญญา',
    'about.mission5.h3': '5. กิจกรรมพิเศษ',
    'about.mission5.p': 'งานสายสัมพันธ์บ้านกับมหาวิทยาลัย ปัจฉิมนิเทศ เปิดโลกอาชีพ และประสานงานโครงการในพระราชดำริ',
    'about.mission6.h3': '6–9. ภารกิจสนับสนุน',
    'about.mission6.p': 'ประสานงาน กนค. และ กนบค. ผ่านระบบ Less Paper, ประสานงานนิสิตเก่าและสมาคมครุศาสตร์สัมพันธ์ รวมถึงสารบรรณและภารกิจพิเศษ',
    'about.vision.title': 'วิสัยทัศน์',
    'about.vision.text': 'กลุ่มภารกิจกิจการนิสิต คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย จะเป็นศูนย์กลางในการจัดกระบวนการเรียนรู้โดยผ่านกิจกรรมต่าง ๆ เพื่อส่งเสริมและพัฒนาศักยภาพของนิสิต ทั้งด้านคุณธรรมและสติปัญญา สามารถนำไปพัฒนาและสรรสร้างสังคมและประเทศชาติให้มีความเจริญต่อไป',
    'about.mission.h2': 'พันธกิจ',
    'about.mcard1.h3': 'ส่งเสริมกิจกรรมนิสิต',
    'about.mcard1.p': 'สนับสนุนการจัดกิจกรรมที่ช่วยพัฒนานิสิตให้มีความพร้อมทั้งด้านการเรียนรู้ การทำงานร่วมกัน และการใช้ชีวิตในสังคมอย่างสร้างสรรค์',
    'about.mcard2.h3': 'ดูแลสวัสดิการนิสิต',
    'about.mcard2.p': 'ดูแลและสนับสนุนสวัสดิการของนิสิตทั้งระดับปริญญาบัณฑิตและบัณฑิตศึกษา เพื่อให้นิสิตได้รับการส่งเสริมอย่างเหมาะสมตลอดช่วงเวลาการศึกษา',
    'about.mcard3.h3': 'ประสานงานกับนิสิตเก่า',
    'about.mcard3.p': 'สร้างความร่วมมือกับนิสิตเก่าในการร่วมพัฒนาคณะ และเชื่อมโยงเครือข่ายที่เป็นประโยชน์ต่อการพัฒนานิสิตในทุกมิติ',
    'about.mcard4.h3': 'พัฒนาศักยภาพและคุณธรรม',
    'about.mcard4.p': 'พัฒนานิสิตให้มีความพร้อมทั้งด้านวิชาการ คุณธรรม การอุทิศตนเพื่อส่วนรวม และความรับผิดชอบต่อสังคม',
    'about.goal.h2': 'เป้าหมาย',
    'about.goal1': 'มุ่งพัฒนานิสิตให้เป็นผู้มีความรู้ ความสามารถ และทักษะที่พร้อมรับการเปลี่ยนแปลงในทุกสถานการณ์',
    'about.goal2': 'ส่งเสริมให้นิสิตมีคุณธรรม จริยธรรม และความรับผิดชอบต่อสังคมและส่วนรวม',
    'about.goal3': 'สนับสนุนให้นิสิตรู้จักตนเอง สามารถปรับตัวต่อการเปลี่ยนแปลง และพัฒนาตนเองอย่างต่อเนื่อง',
    'about.goal4': 'พัฒนานิสิตให้พร้อมเติบโตเป็นบัณฑิตที่สมบูรณ์ มีความรู้คู่คุณธรรม และมีคุณค่าต่อสังคม',

    /* ── activities.html ── */
    'activities.breadcrumb.current': 'กิจกรรม',
    'activities.h1': 'กิจกรรม',
    'activities.subdesc': 'กิจกรรมเพื่อการเรียนรู้ พัฒนาตนเอง และสร้างความสัมพันธ์ในคณะ',
    'activities.h2': 'กิจกรรมนิสิต',
    'activities.card1.h4': 'กิจกรรมต้อนรับนิสิตใหม่',
    'activities.card1.p': 'เสริมสร้างความผูกพัน ความเข้าใจ และการปรับตัวสู่ชีวิตในมหาวิทยาลัย',
    'activities.card2.h4': 'กิจกรรมพัฒนาทักษะ',
    'activities.card2.p': 'ฝึกทักษะสำคัญทั้งด้านวิชาการ ภาวะผู้นำ การสื่อสาร และการทำงานเป็นทีม',
    'activities.card3.h4': 'กิจกรรมสร้างสรรค์และสังคม',
    'activities.card3.p': 'เปิดพื้นที่ให้นิสิตได้แสดงออกอย่างเหมาะสม และมีส่วนร่วมกับสังคมอย่างมีคุณค่า',

    /* ── projects.html ── */
    'projects.breadcrumb.current': 'โครงการ',
    'projects.h1': 'โครงการ',
    'projects.subdesc': 'โครงการที่มุ่งส่งเสริมและพัฒนาศักยภาพนิสิตอย่างสร้างสรรค์',
    'projects.h2': 'โครงการของเรา',
    'projects.featured.h3': 'โครงการพัฒนาภาวะผู้นำนิสิตครู',
    'projects.featured.p': 'เสริมสร้างความเป็นผู้นำ การคิดวิเคราะห์ และการทำงานร่วมกับผู้อื่น ผ่านกิจกรรมเวิร์กช็อปและการฝึกปฏิบัติจริง',
    'projects.item1.h4': 'โครงการจิตอาสา',
    'projects.item1.p': 'ปลูกฝังจิตสาธารณะ ความรับผิดชอบ และการมีส่วนร่วมต่อสังคม',
    'projects.item2.h4': 'โครงการเตรียมความพร้อมสู่อนาคต',
    'projects.item2.p': 'ช่วยให้นิสิตมีทักษะและมุมมองที่พร้อมต่อการเรียน การทำงาน และการใช้ชีวิต',
    'projects.item3.h4': 'โครงการส่งเสริมศิลปวัฒนธรรม',
    'projects.item3.p': 'อนุรักษ์และสืบสานวัฒนธรรมไทย ผ่านกิจกรรมสร้างสรรค์ของนิสิต',

    /* ── scholarships.html ── */
    'scholarships.breadcrumb.current': 'สวัสดิการนิสิต',
    'scholarships.h1': 'สวัสดิการนิสิต',
    'scholarships.subdesc': 'ทุนการศึกษา ประกันสุขภาพ และบริการสำหรับนิสิตทุกระดับ',
    'scholarships.h2': 'ทุนการศึกษา',
    'scholarships.s1.h4': 'ทุนอุดหนุนการศึกษา',
    'scholarships.s1.p': 'ทุนสนับสนุนสำหรับนิสิตที่มีคุณสมบัติตามเกณฑ์ที่กำหนด',
    'scholarships.s1.badge': 'รับสมัครทุกภาคการศึกษา',
    'scholarships.s2.h4': 'ทุนการศึกษาจากหน่วยงานภายนอก',
    'scholarships.s2.p': 'ทุนจากองค์กรภายนอกที่เปิดโอกาสให้นิสิตสมัครเข้ารับการพิจารณา',
    'scholarships.s2.badge': 'ตามประกาศ',
    'scholarships.s3.h4': 'ทุนจุฬาสงเคราะห์',
    'scholarships.s3.p': 'ทุนช่วยเหลือนิสิตที่มีความจำเป็นด้านค่าใช้จ่ายในการศึกษา',
    'scholarships.s3.badge': 'ยื่นตลอดปี',
    'scholarships.s4.h4': 'ทุนอาหารกลางวัน',
    'scholarships.s4.p': 'ทุนสนับสนุนค่าใช้จ่ายด้านอาหารสำหรับนิสิตที่มีความจำเป็น',
    'scholarships.s4.badge': 'รายภาคการศึกษา',
    'scholarships.s5.h4': 'ทุนภูมิพล',
    'scholarships.s5.p': 'ทุนการศึกษาสำหรับนิสิตตามหลักเกณฑ์ของมหาวิทยาลัย',
    'scholarships.s5.badge': 'คัดเลือกพิเศษ',
    'scholarships.s6.h4': 'ทุนช่วยเหลือครอบครัวประสบภัยพิบัติ',
    'scholarships.s6.p': 'ช่วยเหลือนิสิตและครอบครัวในกรณีประสบเหตุฉุกเฉินหรือภัยพิบัติ',
    'scholarships.s6.badge': 'ยื่นเร่งด่วน',
    'scholarships.s7.h4': 'รางวัลนิสิตทำชื่อเสียงให้มหาวิทยาลัย',
    'scholarships.s7.p': 'ยกย่องนิสิตที่สร้างผลงานและชื่อเสียงในด้านต่าง ๆ',
    'scholarships.s7.badge': 'ประจำปีการศึกษา',
    'scholarships.health.h2': 'สุขภาพและประกัน',
    'scholarships.h1.h4': 'โครงการหลักประกันสุขภาพถ้วนหน้า โรงพยาบาลจุฬาลงกรณ์',
    'scholarships.h1.p': 'สิทธิด้านสุขภาพสำหรับนิสิตที่ลงทะเบียนตามเงื่อนไข',
    'scholarships.h1.badge': 'ลงทะเบียนต้นภาค',
    'scholarships.h2.h4': 'ประกันอุบัติเหตุ',
    'scholarships.h2.p': 'คุ้มครองกรณีอุบัติเหตุระหว่างการศึกษาและการทำกิจกรรม',
    'scholarships.h2.badge': 'ตลอดปีการศึกษา',
    'scholarships.h3.h4': 'ประกันนิสิตสุขภาพต่างชาติ',
    'scholarships.h3.p': 'ครอบคลุมด้านประกันสำหรับนิสิตต่างชาติของคณะ',
    'scholarships.h3.badge': 'นิสิตต่างชาติ',
    'scholarships.services.h2': 'บริการนิสิต',
    'scholarships.sv1.h4': 'บริการตราติดรถยนต์นิสิต',
    'scholarships.sv1.p': 'สำหรับนิสิตระดับปริญญาตรีชั้นปีที่ 3 ขึ้นไป และนิสิตระดับบัณฑิตศึกษา',
    'scholarships.sv2.h4': 'การผ่อนผันการเกณฑ์ทหาร',
    'scholarships.sv2.p': 'ให้คำแนะนำและดำเนินการตามขั้นตอนของมหาวิทยาลัย',
    'scholarships.sv3.h4': 'การขอใช้ยานพาหนะกิจกรรม',
    'scholarships.sv3.p': 'บริการประสานการใช้ยานพาหนะสำหรับโครงการและกิจกรรมของนิสิต',

    /* ── staff.html ── */
    'staff.breadcrumb.current': 'บุคลากร',
    'staff.h1': 'บุคลากร',
    'staff.subdesc': 'ทีมงานที่พร้อมดูแลและสนับสนุนนิสิตในทุกด้าน',
    'staff.h2': 'ทีมบุคลากร',
    'staff.card1.h4': 'งานบริหารและประสานงาน',
    'staff.card1.p': 'ดูแลภาพรวมการดำเนินงาน การประสานงานโครงการ และการให้บริการนิสิต',
    'staff.card2.h4': 'งานสวัสดิการนิสิต',
    'staff.card2.p': 'ให้ข้อมูลและสนับสนุนด้านทุนการศึกษา สุขภาพ และสิทธิประโยชน์ต่าง ๆ',
    'staff.card3.h4': 'งานกิจกรรมและพัฒนานิสิต',
    'staff.card3.p': 'ส่งเสริมกิจกรรม โครงการ และการพัฒนาศักยภาพของนิสิตในหลากหลายมิติ',

    /* ── contact.html ── */
    'contact.breadcrumb.current': 'ติดต่อเรา',
    'contact.h1': 'ติดต่อสอบถาม',
    'contact.subdesc': 'ยินดีต้อนรับนิสิตทุกคน หากมีข้อสงสัยสามารถติดต่อเราได้ทันที',
    'contact.info.h2': 'ร่วมสร้าง <em>สังคมแห่งการเรียนรู้</em> ไปกับเรา',
    'contact.info.p': 'กลุ่มภารกิจกิจการนิสิต พร้อมให้คำปรึกษาและสนับสนุนนิสิตในทุกด้าน ไม่ว่าจะเป็นเรื่องทุนการศึกษา หอพัก หรือกิจกรรมต่างๆ',
    'contact.email.h4': 'อีเมลติดต่อ',
    'contact.location.h4': 'ที่ตั้งสำนักงาน',
    'contact.location.p': 'Golden Z Club of Chulalongkorn University <br>คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    'contact.form.h3': 'ส่งข้อความหาเรา',
    'contact.form.name.label': 'ชื่อ-นามสกุล',
    'contact.form.name.placeholder': 'ระบุชื่อของคุณ',
    'contact.form.subject.label': 'หัวข้อเรื่อง',
    'contact.form.subject.placeholder': 'เช่น สอบถามเรื่องทุนการศึกษา',
    'contact.form.message.label': 'รายละเอียดข้อความ',
    'contact.form.message.placeholder': 'พิมพ์ข้อความที่ต้องการติดต่อ...',
    'contact.form.submit': 'ส่งข้อความผ่านอีเมล',
  },

  en: {
    /* ── Navigation ── */
    'logo.main': 'Student Affairs Mission Group',
    'logo.sub': 'Faculty of Education, Chulalongkorn University',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.scholarships': 'Student Welfare',
    'nav.staff': 'Staff',
    'nav.projects': 'Projects',
    'nav.activities': 'Activities',
    'nav.contact': 'Contact Us',
    'nav.login': 'Login',

    /* ── Breadcrumb ── */
    'breadcrumb.home': 'Home',

    /* ── Footer ── */
    'footer.brand.h3': 'Student Affairs Mission Group',
    'footer.brand.p': 'Faculty of Education, Chulalongkorn University',
    'footer.address': '254 Phayathai Road, Wang Mai<br>Pathum Wan, Bangkok 10330<br><br>Tel: 0-2218-2400<br>Email: <a href="mailto:studentaffairs.edu@chula.ac.th">studentaffairs.edu@chula.ac.th</a>',
    'footer.services': 'Services',
    'footer.services.scholarship': 'Scholarships',
    'footer.services.welfare': 'Student Welfare',
    'footer.services.projects': 'Projects',
    'footer.services.system': 'Student Portal',
    'footer.about': 'About',
    'footer.about.history': 'Department History',
    'footer.about.staff': 'Staff',
    'footer.about.news': 'News',
    'footer.links': 'Related Links',
    'footer.links.edu': 'Faculty of Education',
    'footer.links.chula': 'Chulalongkorn University',
    'footer.links.reg': 'Reg Chula System',
    'footer.links.privacy': 'Privacy Policy',
    'footer.copyright': 'Copyright © 2025 | Student Affairs Mission Group, Faculty of Education, Chulalongkorn University',
    'footer.dev': 'Developed by Information Technology Unit',

    /* ── Scroll to top ── */
    'scroll.top': 'Back to top',

    /* ── index2.html ── */
    'index.hero.title': 'Student Affairs Mission Group',
    'index.hero.subtext': 'Promoting student activities, providing comprehensive welfare and care systems — empowering students to discover themselves, develop their abilities, and grow with quality.',
    'index.hero.btn.about': 'About Us',
    'index.about.kicker': 'Background',
    'index.about.h2': 'Student Affairs<br><em>Mission Group</em>',
    'index.about.p': 'The Student Affairs Mission Group\'s primary mission is to provide services that promote the well-being of students during their studies. Our goal is to develop students who are quality individuals with integrity, values, and readiness to become well-rounded graduates.',
    'index.about.cta': 'Read More',
    'index.marquee.scholarship': 'Scholarships',
    'index.marquee.welfare': 'Student Welfare',
    'index.marquee.activities': 'Self-Development Activities',
    'index.marquee.leadership': 'Leadership',
    'index.marquee.volunteer': 'Volunteering',
    'index.marquee.insurance': 'Health Insurance',
    'index.marquee.service': 'Student Services',
    'index.marquee.projects': 'Development Projects',
    'index.welfare.h2': 'Student Welfare',
    'index.welfare.p': 'Services and benefits accessible to all students throughout their studies at the university.',
    'index.welfare.seeall': 'View All Details',
    'index.welfare.card1.h4': 'Scholarships',
    'index.welfare.card1.p': 'Support funds, Bhumibol scholarships, Chula Aid Fund, lunch scholarships, and external scholarships.',
    'index.welfare.card2.h4': 'Insurance & Health',
    'index.welfare.card2.p': 'Accident insurance, health coverage at Chulalongkorn Hospital, and international student insurance.',
    'index.welfare.card3.h4': 'Part-time Employment',
    'index.welfare.card3.p': 'Opportunities for students to work with the university at 100 THB/hour.',
    'index.welfare.card4.h4': 'Student Services',
    'index.welfare.card4.p': 'Vehicle sticker service, military service deferment, and vehicle request for activities.',
    'index.news.kicker': 'Latest Updates',
    'index.news.h2': 'News & Activities',
    'index.news.seeall': 'View All',
    'index.news.tag1': 'Scholarships',
    'index.news.item1.h3': 'Applications Open for Educational Support Scholarships — First Semester, Academic Year 2025',
    'index.news.item1.p': 'For students with financial need and academic qualifications meeting the criteria. Applications can be submitted at the Student Affairs Mission Group.',
    'index.news.readmore': 'Read More',
    'index.news.item2.h4': 'International Student Health Insurance Renewal Schedule — First Semester 2025',
    'index.news.item2.p': 'Please follow the document details and related timelines.',
    'index.news.item3.h4': 'Student Teacher Leadership Development Program — 12th Edition',
    'index.news.item3.p': 'Activities to build leadership skills, teamwork, and professional growth.',
    'index.news.item4.h4': 'Announcement: Students Who Brought Honor to the University',
    'index.news.item4.p': 'Honoring students with outstanding achievements in Academic Year 2024.',

    /* ── about.html ── */
    'about.breadcrumb.current': 'About Us',
    'about.h1': 'About Us',
    'about.subdesc': 'History, Vision, Mission and Goals of the Student Affairs Mission Group',
    'about.intro.h2': 'Committed to Developing<br><em>Students</em> in All Dimensions',
    'about.intro.p1': 'The Student Affairs Mission Group\'s primary mission is to provide services that promote the well-being of students during their studies. Our goal is to develop students who have integrity, values, and readiness to become well-rounded graduates with knowledge and virtue.',
    'about.intro.p2': 'We operate through 9 core missions: student activities and relations, student welfare, student discipline, student development, special activities, committee coordination (KNK & KNBK), alumni relations, administration and budgeting, and special assignments.',
    'about.missions.h2': '9 Core Missions',
    'about.mission1.h3': '1. Student Activities & Relations',
    'about.mission1.p': 'Encouraging students to become good members of society through 5 student committees: academic, sports, arts & culture, student relations, and social development.',
    'about.mission2.h3': '2. Student Welfare',
    'about.mission2.p': 'Providing scholarships, part-time employment at 100 THB/hour, accident insurance, accommodation services, and academic and life counseling.',
    'about.mission3.h3': '3. Student Discipline',
    'about.mission3.p': 'Promoting discipline, desirable values in dress, manners, and public property care, along with counseling and problem-solving support.',
    'about.mission4.h3': '4. Student Development',
    'about.mission4.p': 'Organizing activities for mental, physical, and personality development, including dharma practice and wisdom cultivation activities.',
    'about.mission5.h3': '5. Special Activities',
    'about.mission5.p': 'Home-university bond events, farewell ceremonies, career exploration, and coordination of royal initiative projects.',
    'about.mission6.h3': '6–9. Support Missions',
    'about.mission6.p': 'Coordinating KNK & KNBK via the Less Paper system, alumni and Education Relations Association coordination, administration and special assignments.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'The Student Affairs Mission Group, Faculty of Education, Chulalongkorn University, aims to be the center for organizing learning processes through various activities to promote and develop students\' potential in both moral and intellectual dimensions, enabling them to contribute to the development of society and the nation.',
    'about.mission.h2': 'Mission',
    'about.mcard1.h3': 'Promote Student Activities',
    'about.mcard1.p': 'Supporting activities that help students develop readiness in learning, teamwork, and creative social engagement.',
    'about.mcard2.h3': 'Care for Student Welfare',
    'about.mcard2.p': 'Providing welfare support for both undergraduate and graduate students to ensure appropriate promotion throughout their academic journey.',
    'about.mcard3.h3': 'Alumni Coordination',
    'about.mcard3.p': 'Building cooperation with alumni to contribute to faculty development and create networks beneficial to student growth in all dimensions.',
    'about.mcard4.h3': 'Develop Potential & Virtue',
    'about.mcard4.p': 'Preparing students in academic excellence, virtue, public service dedication, and social responsibility.',
    'about.goal.h2': 'Goals',
    'about.goal1': 'To develop students who have knowledge, capability, and skills ready to adapt to changes in any situation.',
    'about.goal2': 'To promote students\' virtues, ethics, and responsibility towards society and the public.',
    'about.goal3': 'To support students in self-awareness, adaptability to change, and continuous self-development.',
    'about.goal4': 'To develop students ready to become well-rounded graduates with knowledge, virtue, and social value.',

    /* ── activities.html ── */
    'activities.breadcrumb.current': 'Activities',
    'activities.h1': 'Activities',
    'activities.subdesc': 'Activities for learning, self-development, and building relationships within the faculty.',
    'activities.h2': 'Student Activities',
    'activities.card1.h4': 'New Student Orientation',
    'activities.card1.p': 'Building connection, understanding, and adaptation to university life.',
    'activities.card2.h4': 'Skills Development Activities',
    'activities.card2.p': 'Training key skills in academics, leadership, communication, and teamwork.',
    'activities.card3.h4': 'Creative & Social Activities',
    'activities.card3.p': 'Creating space for students to express themselves appropriately and engage meaningfully with society.',

    /* ── projects.html ── */
    'projects.breadcrumb.current': 'Projects',
    'projects.h1': 'Projects',
    'projects.subdesc': 'Projects aimed at creatively promoting and developing student potential.',
    'projects.h2': 'Our Projects',
    'projects.featured.h3': 'Student Teacher Leadership Development Project',
    'projects.featured.p': 'Enhancing leadership, analytical thinking, and collaboration through workshop activities and practical training.',
    'projects.item1.h4': 'Volunteer Spirit Project',
    'projects.item1.p': 'Cultivating public mindedness, responsibility, and social participation.',
    'projects.item2.h4': 'Future Readiness Project',
    'projects.item2.p': 'Helping students develop skills and perspectives ready for study, work, and life.',
    'projects.item3.h4': 'Arts & Culture Promotion Project',
    'projects.item3.p': 'Preserving and continuing Thai culture through creative student activities.',

    /* ── scholarships.html ── */
    'scholarships.breadcrumb.current': 'Student Welfare',
    'scholarships.h1': 'Student Welfare',
    'scholarships.subdesc': 'Scholarships, health insurance, and services for students at all levels.',
    'scholarships.h2': 'Scholarships',
    'scholarships.s1.h4': 'Educational Support Scholarship',
    'scholarships.s1.p': 'Support funds for students who meet the specified qualifications.',
    'scholarships.s1.badge': 'Open Every Semester',
    'scholarships.s2.h4': 'External Organization Scholarships',
    'scholarships.s2.p': 'Scholarships from external organizations open for student applications.',
    'scholarships.s2.badge': 'Per Announcement',
    'scholarships.s3.h4': 'Chula Aid Fund',
    'scholarships.s3.p': 'Financial assistance for students with educational expense needs.',
    'scholarships.s3.badge': 'Year-round Applications',
    'scholarships.s4.h4': 'Lunch Scholarship',
    'scholarships.s4.p': 'Food expense support for students with financial needs.',
    'scholarships.s4.badge': 'Per Semester',
    'scholarships.s5.h4': 'Bhumibol Scholarship',
    'scholarships.s5.p': 'University scholarship for students meeting the specified criteria.',
    'scholarships.s5.badge': 'Special Selection',
    'scholarships.s6.h4': 'Disaster Relief Scholarship',
    'scholarships.s6.p': 'Assistance for students and families in emergency or disaster situations.',
    'scholarships.s6.badge': 'Urgent Applications',
    'scholarships.s7.h4': 'University Honor Award',
    'scholarships.s7.p': 'Recognizing students who have built achievements and reputation in various fields.',
    'scholarships.s7.badge': 'Annual',
    'scholarships.health.h2': 'Health & Insurance',
    'scholarships.h1.h4': 'Universal Health Coverage — Chulalongkorn Hospital',
    'scholarships.h1.p': 'Health rights for students registered under the applicable conditions.',
    'scholarships.h1.badge': 'Register at Semester Start',
    'scholarships.h2.h4': 'Accident Insurance',
    'scholarships.h2.p': 'Coverage for accidents during studies and activities.',
    'scholarships.h2.badge': 'Throughout Academic Year',
    'scholarships.h3.h4': 'International Student Health Insurance',
    'scholarships.h3.p': 'Insurance coverage for international students in the faculty.',
    'scholarships.h3.badge': 'International Students',
    'scholarships.services.h2': 'Student Services',
    'scholarships.sv1.h4': 'Student Vehicle Sticker Service',
    'scholarships.sv1.p': 'For undergraduate students from year 3 onwards and graduate students.',
    'scholarships.sv2.h4': 'Military Service Deferment',
    'scholarships.sv2.p': 'Guidance and processing according to university procedures.',
    'scholarships.sv3.h4': 'Activity Vehicle Request',
    'scholarships.sv3.p': 'Vehicle coordination service for student projects and activities.',

    /* ── staff.html ── */
    'staff.breadcrumb.current': 'Staff',
    'staff.h1': 'Staff',
    'staff.subdesc': 'Our dedicated team ready to support and care for students in every aspect.',
    'staff.h2': 'Our Team',
    'staff.card1.h4': 'Administration & Coordination',
    'staff.card1.p': 'Overseeing operations, project coordination, and student services.',
    'staff.card2.h4': 'Student Welfare',
    'staff.card2.p': 'Providing information and support for scholarships, health, and various benefits.',
    'staff.card3.h4': 'Student Activities & Development',
    'staff.card3.p': 'Promoting activities, projects, and student potential development in multiple dimensions.',

    /* ── contact.html ── */
    'contact.breadcrumb.current': 'Contact Us',
    'contact.h1': 'Contact Us',
    'contact.subdesc': 'We welcome all students. If you have any questions, feel free to contact us anytime.',
    'contact.info.h2': 'Join Us in Building <em>a Learning Society</em>',
    'contact.info.p': 'The Student Affairs Mission Group is ready to advise and support students in every aspect — whether about scholarships, accommodation, or activities.',
    'contact.email.h4': 'Email',
    'contact.location.h4': 'Office Location',
    'contact.location.p': 'Golden Z Club of Chulalongkorn University <br>Faculty of Education, Chulalongkorn University',
    'contact.form.h3': 'Send Us a Message',
    'contact.form.name.label': 'Full Name',
    'contact.form.name.placeholder': 'Enter your full name',
    'contact.form.subject.label': 'Subject',
    'contact.form.subject.placeholder': 'e.g. Scholarship inquiry',
    'contact.form.message.label': 'Message Details',
    'contact.form.message.placeholder': 'Type your message here...',
    'contact.form.submit': 'Send via Email',
  }
};

// ─── Core functions ───────────────────────────────────────────────────────────

function getLang() {
  return localStorage.getItem('siteLang') || 'th';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (for elements containing <em>, <br>, <a>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Title attribute
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) el.title = t[key];
  });

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update lang button label
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.textContent = lang === 'th' ? 'TH' : 'EN';
    btn.setAttribute('data-lang', lang);
  });
}

function toggleLang() {
  const current = getLang();
  const next = current === 'th' ? 'en' : 'th';
  localStorage.setItem('siteLang', next);
  applyLang(next);
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyLang(lang);

  // Bind lang button(s)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', toggleLang);
  });
});
