DROP DATABASE IF EXISTS ecommerceSite_db;
CREATE DATABASE ecommerceSite_db;

USE ecommerceSite_db;

CREATE TABLE products
(


    id INT
    AUTO_INCREMENT NOT NULL,
  product_name VARCHAR
    (45) NOT NULL,
 category_name VARCHAR
    (45) NOT NULL,
  
  stock_quantity INT
    (10) NOT NULL,
  primary key
    (id)
);

    SELECT *
    FROM products;

    INSERT INTO products
        (ProductName,Product_Description,Product_Category,Inventory,Product_image)


    VALUES("PAOLO BUFFA LOUNGE CHAIR", "This unique assortment of rare European vintage was selected in collaboration with designer and curator of beautiful things Charlie Ferrer. Charlie scouted the finest dealers, shops and galleries in Europe to gather these original treasures. Each is one-of-a-kind. ", "chair", "100 pieces", "https://cb2.scene7.com/is/image/CB2/274639_PaoloBuffaLoungeChair/?$web_product_hero$&190910144912&wid=625&hei=625");
    ("MONIKER CANE BACK CHAIR","Boho vibes meet a modern twist in this cane back chair designed by Mermelada Estudio. Handwoven cane and a black leather seat add to the natural, relaxed feel.","chair","56 units"," https://cb2.scene7.com/is/image/CB2/MonikerCaneBackChairSHF19_16x9/?$web_zoom_furn_hero$&190423145817&wid=1008&hei=567");
    ("CUE GREY CHAIR","luxe lounger leans ultra modern in shiny chrome and warm grey. Sleek, square base sits low-ish to the ground with an extra-deep seat and wide back perfectly angled for comfort. Grey textural weave manages to be warm yet sophisticated. All together the vibe is glamorous, elegant and very upscale.","chair","40 pieces"," https://cb2.scene7.com/is/image/CB2/CueChairChromeSHF16_16x9/?$web_zoom_furn_hero$&190905021123&wid=1008&hei=567");
    ("POTTER ZEBRA PRINT HAIR ON HIDE CHAIR","Midcentury-inspired chair takes minimalist notes from a classic 1960s-era lounge chair. Natural cowhide with zebra pattern stretches sleek across a clean chrome frame . Simple angles and soft curves carry this zebra print chair from the office to the living room to any corner in need of a little design love","chair","60 pieces"," https://cb2.scene7.com/is/image/CB2/PotterZbrPrintHrOnHdChairSHF1916x_16x9/?$web_zoom_furn_hero$&190424134905&wid=1008&hei=567");
    ("AVORIO SIDE TABLE","Clean, ivory cement side table makes a soft statement thanks to organic edges.We went for an interesting, modern shape and no hard edges, says the goop team of their side table. We love it alone or nested with the Jelly Bean Coffee Table.","table","20 pieces"," https://cb2.scene7.com/is/image/CB2/AvorioSideTableSHF19_16x9/?$web_zoom_furn_hero$&190612171030&wid=1008&hei=567");
    (" BENTO SIDE TABLE',' Parsons-style side table base of sustainable acacia wood provides solid foundation for optional shiny brass-colored removable tray. Raised outer edge keeps up appearances with/or without tray.","table","40 pieces"," https://cb2.scene7.com/is/image/CB2/BentoSideTableBaseRCS17_16x9/?$web_product_hero$&190905021659&wid=625&hei=625");
    (" SPIN ROTATING COFFEE TABLE","Rotate the upper element and everything changes. This acacia wood coffee table maximizes function through strong, geometric design. The beauty is in the details of more than each component but the space and relationship between them. Complete with one open shelf and two sliding drawers for concealed storage. Pair with our Spin Rotating Coffee Table.","table","10 pieces"," https://cb2.scene7.com/is/image/CB2/SpinRotatingCoffeeTableSHS18_16x9/?$web_zoom_furn_hero$&190905022822&wid=1008&hei=567");
    ("JUSTICE OAK COFFEE TABLE","Oak table is a solid take on classic midcentury design. Thick, chunky base roots firmly in place and hand-finished feels round out the surface. The perfect spot for morning coffee or evening cocktails.","table","10 pieces"," https://cb2.scene7.com/is/image/CB2/GQJusticeOakCoffeeTableSHF19_16x9/?$web_zoom_furn_hero$&190710091842&wid=1008&hei=567");
    ("GROVE HANGING LOVESEAT SWING"," w heights. Hanging by two thick black ropes, handwoven faux rattan wraps round a lightweight aluminum frame to create this cozy place to lounge. Four cushions, one seat and three back make this easy-breezy loveseat swing extra hard to leave.","sofa","20 pieces"," https://cb2.scene7.com/is/image/CB2/grovehangingloveseatswingOFB18/?$web_zoom_furn_colormap$&191002092756&wid=1008&hei=567");
    ("TROPEZ NATURAL SOFA","If we went to a fancy hotel in the French Riviera, this is what we want in our cabana. A modern interpretation of retro resort style by designer Ceci Thompson. Crafted of natural mahogany—a rich, warm wood that stands up to the elements year after year—this classic slatted silhouette is both elegant and airy. Off-white linen-like cushion in weather-resistant polyester fits perfectly with any outdoor decor. Best of all, cushion cover zips right off for easy cleaning.","sofa","10 pieces"," https://cb2.scene7.com/is/image/CB2/TropezSofaNaturalSHS16_16x9/?$web_zoom_furn_hero$&190905021022&wid=1008&hei=567");
    (" LOGAN BROWN LEATHER SOFA","Brown like your favorite Oxfords, and just as comfy. Relaxed leather sofa dressed in masculine lines rests on chunky, vintage-inspired block feet\n 100% leather with a soft, buttery hand and slight sheen; natural markings to be expected; leather continues to soften and beautifully patinas over time","sofa","20 pieces"," https://cb2.scene7.com/is/image/CB2/LoganLeatherSofaSHF18_16x9/?$web_zoom_furn_hero$&190905023408&wid=1008&hei=567");
    ("AVEC APARTMENT SOFA WITH BRASS LEGS","Sofa scales up on modern upholstered frame made for relaxation. Designed by James Patterson, grey sofa\'s slim, discreet profile is edgy and sleek. Brushed brass finished legs squarely support the generous seat, an upholstered in chic stone fabric.","sofa","10 pieces"," https://cb2.scene7.com/is/image/CB2/AvecAptSofaMothrAmaznMultiSHF16_16x9/?$web_product_hero$&190905021346&wid=625&hei=625");


    SELECT *
    FROM products;