import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import card1 from "../../assets/content-img/image 13.png";
// import card2 from "../../assets/content-img/image 39.png";
// import card3 from "../../assets/card-img/building 1.png";
// import card4 from "../../assets/card-img/house-rental 1.png";
// import card5 from "../../assets/card-img/gear 1.png";
// import card6 from "../../assets/card-img/inspecting 1.png";
// import productImage1 from "../../assets/card-img/bumb cap.jpg";
// import productImage2 from "../../assets/card-img/bumb cap.jpg";
// import productImage3 from "../../assets/card-img/ac compressor.jpg";
// import productImage4 from "../../assets/card-img/adjustable spanner.jpg";
// import productImage5 from "../../assets/card-img/allen bolt.jpg";
// import productImage6 from "../../assets/card-img/analog multi meter.jpg";
// import productImage7 from "../../assets/card-img/allen key.jpg";
// import productImage8 from "../../assets/card-img/anemometer.jpg";
// import productImage9 from "../../assets/card-img/anti spatter spray.jpg";
// import productImage10 from "../../assets/card-img/araldite.jpg";
// import productImage11 from "../../assets/card-img/assorted copper washer.jpg";
// import productImage12 from "../../assets/card-img/assorted split pin.jpg";
// import productImage13 from "../../assets/card-img/boot lace crimping tool.jpg";
// import productImage14 from "../../assets/card-img/broach cutter.jpg";
// import productImage15 from "../../assets/card-img/castor wheel a.jpg";
// import productImage16 from "../../assets/card-img/castor wheel b.jpg";
// import productImage17 from "../../assets/card-img/caution board.jpg";
// import productImage18 from "../../assets/card-img/chin strap.jpg";
// import productImage19 from "../../assets/card-img/circuit breaker.jpg";
// import productImage20 from "../../assets/card-img/coco broom.jpg";
// import productImage21 from "../../assets/card-img/cutting nozzles.jpg";
// import productImage22 from "../../assets/card-img/conduit flexible pipe.jpg";
// import productImage23 from "../../assets/card-img/cotton rag colors.jpg";
// import productImage24 from "../../assets/card-img/cotton rag white.jpg";
// import productImage25 from "../../assets/card-img/cutting welding set.jpg";
// import productImage26 from "../../assets/card-img/digital vernier.jpg";
// import productImage27 from "../../assets/card-img/gas torch.jpg";
// import productImage28 from "../../assets/card-img/gear 1.png";
// import productImage29 from "../../assets/card-img/broach cutter.jpg";
// import productImage30 from "../../assets/card-img/hydraulic bender.jpg";
// import productImage31 from "../../assets/card-img/castor wheel a.jpg";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import { Row } from "react-bootstrap";
import "./ProductCategory.css";

// Head Protection
import head_image1 from "../../assets/product_images/safty_images/head_images/bumb cap.jpg";
import head_image2 from "../../assets/product_images/safty_images/head_images/chin strap.jpg";
import head_image3 from "../../assets/product_images/safty_images/head_images/ratchet helmet.jpg";
import head_image4 from "../../assets/product_images/safty_images/head_images/safety helmet.jpg";

// Ear Protection

import ear_image_1 from "../../assets/product_images/safty_images/ear_images/ear band.jpg";
import ear_image_2 from "../../assets/product_images/safty_images/ear_images/ear muff.jpg";
import ear_image_3 from "../../assets/product_images/safty_images/ear_images/ear plug.jpg";
import ear_image_4 from "../../assets/product_images/safty_images/ear_images/helmet ear muff.jpg";

// Eye Protection
import eye_images1 from "../../assets/product_images/safty_images/eye_images/chemical goggle.jpg";
import eye_images2 from "../../assets/product_images/safty_images/eye_images/face shield.jpg";
import eye_images3 from "../../assets/product_images/safty_images/eye_images/over glass.jpg";
import eye_images4 from "../../assets/product_images/safty_images/eye_images/safety glass.jpg";

// Respiration
import respiration1 from "../../assets/product_images/safty_images/respiration_images/dust mask.jpg";
import respiration2 from "../../assets/product_images/safty_images/respiration_images/full face mask.jpg";
import respiration3 from "../../assets/product_images/safty_images/respiration_images/half face mask.jpg";
import respiration4 from "../../assets/product_images/safty_images/respiration_images/surgical mask.jpg";

// Hand Protection
import hand_image1 from "../../assets/product_images/safty_images/hand_images/argon gloves.jpg";
import hand_image2 from "../../assets/product_images/safty_images/hand_images/black dotted gloves.jpg";
import hand_image3 from "../../assets/product_images/safty_images/hand_images/chemical resistant gloves.jpg";
import hand_image4 from "../../assets/product_images/safty_images/hand_images/cotton gloves.jpg";
import hand_image5 from "../../assets/product_images/safty_images/hand_images/double side dotted gloves.jpg";
import hand_image6 from "../../assets/product_images/safty_images/hand_images/electrical gloves.jpg";
import hand_image7 from "../../assets/product_images/safty_images/hand_images/latex gloves.jpg";
import hand_image8 from "../../assets/product_images/safty_images/hand_images/leather gloves.jpg";
import hand_image9 from "../../assets/product_images/safty_images/hand_images/rubber gloves.jpg";
import hand_image10 from "../../assets/product_images/safty_images/hand_images/vinyl gloves.jpg";

// Leg Protection
import leg_images1 from "../../assets/product_images/safty_images/leg_images/engineers shoes.jpg";
import leg_images2 from "../../assets/product_images/safty_images/leg_images/gumboots.jpg";
import leg_images3 from "../../assets/product_images/safty_images/leg_images/labour shoes.jpg";
import leg_images4 from "../../assets/product_images/safty_images/leg_images/shoe wo lace.jpg";
import leg_images5 from "../../assets/product_images/safty_images/leg_images/staff shoes.jpg";

// Welding Protection
import welding_images1 from "../../assets/product_images/safty_images/welding_images/welder apron.jpg";
import welding_images2 from "../../assets/product_images/safty_images/welding_images/welding coverall.jpg";
import welding_images3 from "../../assets/product_images/safty_images/welding_images/welding goggle.jpg";
import welding_images4 from "../../assets/product_images/safty_images/welding_images/welding hand sleeve.jpg";
import welding_images5 from "../../assets/product_images/safty_images/welding_images/welding helmet.jpg";
import welding_images6 from "../../assets/product_images/safty_images/welding_images/welding leather boot.jpg";
import welding_images7 from "../../assets/product_images/safty_images/welding_images/welding leather gloves.jpg";

// Safety Work Wares

import safty_images1 from "../../assets/product_images/safty_images/saftey_work_images/coverall.jpg";
import safty_images2 from "../../assets/product_images/safty_images/saftey_work_images/disposable coverall.jpg";
import safty_images3 from "../../assets/product_images/safty_images/saftey_work_images/disposable shoe cover.jpg";
import safty_images4 from "../../assets/product_images/safty_images/saftey_work_images/face cover.jpg";
import safty_images5 from "../../assets/product_images/safty_images/saftey_work_images/fire retardant coverall.jpg";
import safty_images6 from "../../assets/product_images/safty_images/saftey_work_images/rain coat.jpg";
import safty_images7 from "../../assets/product_images/safty_images/saftey_work_images/reflector coverall.jpg";
import safty_images8 from "../../assets/product_images/safty_images/saftey_work_images/safety harness.jpg";
import safty_images9 from "../../assets/product_images/safty_images/saftey_work_images/safety vest.jpg";
import safty_images10 from "../../assets/product_images/safty_images/saftey_work_images/winter jackets.jpg";

// Other Safety Protection
import otherSafty_images1 from "../../assets/product_images/safty_images/other_saftey_images/barricade light.jpg";
import otherSafty_images2 from "../../assets/product_images/safty_images/other_saftey_images/baton light.jpg";
import otherSafty_images3 from "../../assets/product_images/safty_images/other_saftey_images/cable protector hump.jpg";
import otherSafty_images4 from "../../assets/product_images/safty_images/other_saftey_images/emergency eye wash station.jpg";
import otherSafty_images5 from "../../assets/product_images/safty_images/other_saftey_images/eye wash.jpg";
import otherSafty_images6 from "../../assets/product_images/safty_images/other_saftey_images/fire extinguisher.jpg";
import otherSafty_images7 from "../../assets/product_images/safty_images/other_saftey_images/first aid kit.jpg";
import otherSafty_images8 from "../../assets/product_images/safty_images/other_saftey_images/kitchen fire blanket.jpg";
import otherSafty_images9 from "../../assets/product_images/safty_images/other_saftey_images/life buoy.jpg";
import otherSafty_images10 from "../../assets/product_images/safty_images/other_saftey_images/life jacket.jpg";
import otherSafty_images11 from "../../assets/product_images/safty_images/other_saftey_images/revolving becon light (1).jpg";
import otherSafty_images12 from "../../assets/product_images/safty_images/other_saftey_images/revolving becon light.jpg";
import otherSafty_images13 from "../../assets/product_images/safty_images/other_saftey_images/rubber road humb.jpg";
import otherSafty_images14 from "../../assets/product_images/safty_images/other_saftey_images/safety signs sticker.jpg";
import otherSafty_images15 from "../../assets/product_images/safty_images/other_saftey_images/siren.jpg";
import otherSafty_images16 from "../../assets/product_images/safty_images/other_saftey_images/smoke detector.jpg";
import otherSafty_images17 from "../../assets/product_images/safty_images/other_saftey_images/spray horn.jpg";
import otherSafty_images18 from "../../assets/product_images/safty_images/other_saftey_images/traffic cone.jpg";
import otherSafty_images19 from "../../assets/product_images/safty_images/other_saftey_images/traffic mirror.jpg";
import otherSafty_images20 from "../../assets/product_images/safty_images/other_saftey_images/triancle.jpg";
import otherSafty_images21 from "../../assets/product_images/safty_images/other_saftey_images/warning flag.jpg";
import otherSafty_images22 from "../../assets/product_images/safty_images/other_saftey_images/warning tape.jpg";
import otherSafty_images23 from "../../assets/product_images/safty_images/other_saftey_images/wheel chock.jpg";
import otherSafty_images24 from "../../assets/product_images/safty_images/other_saftey_images/windsock.jpg";

// Lock Out - Tag Out Tools

import lockout_images1 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/cable lockout.jpg";
import lockout_images2 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/circuit breaker locks.jpg";
import lockout_images3 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/combination lock.jpg";
import lockout_images4 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/lock box.jpg";
import lockout_images5 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/lock out station.jpg";
import lockout_images6 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/lock out tags.jpg";
import lockout_images7 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/lockout hasps.jpg";
import lockout_images8 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/lockout padlock.jpg";
import lockout_images9 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/padlock.jpg";
import lockout_images10 from "../../assets/product_images/safty_images/lock_out_tag_out_tool_images/scaffolding tag.jpg";

// Specialised Products
import special_images1 from "../../assets/product_images/specialised_images/cotton rag colors.jpg";
import special_images2 from "../../assets/product_images/specialised_images/cotton rag white.jpg";
import special_images3 from "../../assets/product_images/specialised_images/duct fan.jpg";
import special_images4 from "../../assets/product_images/specialised_images/duct hose.jpg";
import special_images5 from "../../assets/product_images/specialised_images/empty sand bag.jpg";
import special_images6 from "../../assets/product_images/specialised_images/fire blanket roll.jpg";
import special_images7 from "../../assets/product_images/specialised_images/fire retardant.jpg";
import special_images8 from "../../assets/product_images/specialised_images/hessian cloth.jpg";
import special_images9 from "../../assets/product_images/specialised_images/jumbo bag.jpg";
import special_images10 from "../../assets/product_images/specialised_images/plastic zip bag.jpg";
import special_images11 from "../../assets/product_images/specialised_images/polythene bag.jpg";
import special_images12 from "../../assets/product_images/specialised_images/polythene roll.jpg";
import special_images13 from "../../assets/product_images/specialised_images/tarpaulin.jpg";

// "Housekeeping Products
import housekeeping_images1 from "../../assets/product_images/housekeeping_images/caution board.jpg";
import housekeeping_images2 from "../../assets/product_images/housekeeping_images/coco broom.jpg";
import housekeeping_images3 from "../../assets/product_images/housekeeping_images/floor map.jpg";
import housekeeping_images4 from "../../assets/product_images/housekeeping_images/floor wipers.jpg";
import housekeeping_images5 from "../../assets/product_images/housekeeping_images/garbage bag.jpg";
import housekeeping_images6 from "../../assets/product_images/housekeeping_images/grabber tool.jpg";
import housekeeping_images7 from "../../assets/product_images/housekeeping_images/hand brush.jpg";
import housekeeping_images8 from "../../assets/product_images/housekeeping_images/hard broom.jpg";
import housekeeping_images9 from "../../assets/product_images/housekeeping_images/mop buckets.jpg";
import housekeeping_images10 from "../../assets/product_images/housekeeping_images/mop trolley.jpg";
import housekeeping_images11 from "../../assets/product_images/housekeeping_images/plastic garbage bin.jpg";
import housekeeping_images12 from "../../assets/product_images/housekeeping_images/soap dispenser.jpg";
import housekeeping_images13 from "../../assets/product_images/housekeeping_images/soft broom.jpg";
import housekeeping_images14 from "../../assets/product_images/housekeeping_images/spray bottle.jpg";
import housekeeping_images15 from "../../assets/product_images/housekeeping_images/sprayer bottle.jpg";
import housekeeping_images16 from "../../assets/product_images/housekeeping_images/sprayer pumps.jpg";
import housekeeping_images17 from "../../assets/product_images/housekeeping_images/stainless steel bin.jpg";
import housekeeping_images18 from "../../assets/product_images/housekeeping_images/supra bin.jpg";
import housekeeping_images19 from "../../assets/product_images/housekeeping_images/wet mop.jpg";
import housekeeping_images20 from "../../assets/product_images/housekeeping_images/wrapping roll.jpg";

// Welding Related Materials
import welding_related1 from "../../assets/product_images/welding_metirial_images/cutting nozzles.jpg";
import welding_related2 from "../../assets/product_images/welding_metirial_images/cutting welding set.jpg";
import welding_related3 from "../../assets/product_images/welding_metirial_images/cylinder trolly.jpg";
import welding_related4 from "../../assets/product_images/welding_metirial_images/electrode holder.jpg";
import welding_related5 from "../../assets/product_images/welding_metirial_images/flash back arrestor.jpg";
import welding_related6 from "../../assets/product_images/welding_metirial_images/heating torch.jpg";
import welding_related7 from "../../assets/product_images/welding_metirial_images/welding cable connectors.jpg";
import welding_related8 from "../../assets/product_images/welding_metirial_images/welding cable.jpg";
import welding_related9 from "../../assets/product_images/welding_metirial_images/welding chalk.jpg";
import welding_related10 from "../../assets/product_images/welding_metirial_images/welding hammer.jpg";
import welding_related11 from "../../assets/product_images/welding_metirial_images/welding lighter.jpg";
import welding_related12 from "../../assets/product_images/welding_metirial_images/welding machine.jpg";
import welding_related13 from "../../assets/product_images/welding_metirial_images/welding regulators.jpg";
import welding_related14 from "../../assets/product_images/welding_metirial_images/welding rods.jpg";
import welding_related15 from "../../assets/product_images/welding_metirial_images/welding twin hose.jpg";

//  Adhesive, Lubricants & Sealants
import adhesive_images1 from "../../assets/product_images/Adhesive_Lubricants_images/anti spatter spray.jpg";
import adhesive_images2 from "../../assets/product_images/Adhesive_Lubricants_images/araldite.jpg";
import adhesive_images3 from "../../assets/product_images/Adhesive_Lubricants_images/bison kit.jpg";
import adhesive_images4 from "../../assets/product_images/Adhesive_Lubricants_images/bison montage kit.jpg";
import adhesive_images5 from "../../assets/product_images/Adhesive_Lubricants_images/contact cleaner.jpg";
import adhesive_images6 from "../../assets/product_images/Adhesive_Lubricants_images/copaslip.jpg";
import adhesive_images7 from "../../assets/product_images/Adhesive_Lubricants_images/crc contact cleaner.jpg";
import adhesive_images8 from "../../assets/product_images/Adhesive_Lubricants_images/crc galva brite.jpg";
import adhesive_images9 from "../../assets/product_images/Adhesive_Lubricants_images/devcon putty.jpg";
import adhesive_images10 from "../../assets/product_images/Adhesive_Lubricants_images/dp checking sprays.jpg";
import adhesive_images11 from "../../assets/product_images/Adhesive_Lubricants_images/fevicol.jpg";
import adhesive_images12 from "../../assets/product_images/Adhesive_Lubricants_images/fire retardant foam spray.jpg";
import adhesive_images13 from "../../assets/product_images/Adhesive_Lubricants_images/gasket maker.jpg";
import adhesive_images14 from "../../assets/product_images/Adhesive_Lubricants_images/lapping paste.jpg";
import adhesive_images15 from "../../assets/product_images/Adhesive_Lubricants_images/loctite.jpg";
import adhesive_images16 from "../../assets/product_images/Adhesive_Lubricants_images/molykote.jpg";
import adhesive_images17 from "../../assets/product_images/Adhesive_Lubricants_images/multi purpose grease.jpg";
import adhesive_images18 from "../../assets/product_images/Adhesive_Lubricants_images/pu foam spray.jpg";
import adhesive_images19 from "../../assets/product_images/Adhesive_Lubricants_images/s-171901.jpg";
import adhesive_images20 from "../../assets/product_images/Adhesive_Lubricants_images/silicone spray.jpg";
import adhesive_images21 from "../../assets/product_images/Adhesive_Lubricants_images/silicone.jpg";
import adhesive_images22 from "../../assets/product_images/Adhesive_Lubricants_images/stainless steel cleaner 3m.jpg";
import adhesive_images23 from "../../assets/product_images/Adhesive_Lubricants_images/super glue.jpg";
import adhesive_images24 from "../../assets/product_images/Adhesive_Lubricants_images/wd 40.jpg";
import adhesive_images25 from "../../assets/product_images/Adhesive_Lubricants_images/weicon thread lock.jpg";
import adhesive_images26 from "../../assets/product_images/Adhesive_Lubricants_images/weicon zinc spray.jpg";
// Air Conditioning Supplies & Parts

import airconditioning_images1 from "../../assets/product_images/Air_Conditioning_images/ac compressor.jpg";
import airconditioning_images2 from "../../assets/product_images/Air_Conditioning_images/ac fan blade.jpg";
import airconditioning_images3 from "../../assets/product_images/Air_Conditioning_images/ac fan motor.jpg";
import airconditioning_images4 from "../../assets/product_images/Air_Conditioning_images/bearings.jpg";
import airconditioning_images5 from "../../assets/product_images/Air_Conditioning_images/charging value.jpg";
import airconditioning_images6 from "../../assets/product_images/Air_Conditioning_images/control board.jpg";
import airconditioning_images7 from "../../assets/product_images/Air_Conditioning_images/copper coil.jpg";
import airconditioning_images8 from "../../assets/product_images/Air_Conditioning_images/heating element.jpg";
import airconditioning_images9 from "../../assets/product_images/Air_Conditioning_images/manifold gauge.jpg";
import airconditioning_images10 from "../../assets/product_images/Air_Conditioning_images/refrigerant gas.jpg";
import airconditioning_images11 from "../../assets/product_images/Air_Conditioning_images/running capacitor.jpg";
import airconditioning_images12 from "../../assets/product_images/Air_Conditioning_images/square capacitor.jpg";
import airconditioning_images13 from "../../assets/product_images/Air_Conditioning_images/thermostat.jpg";

// Rothenberger
import rothenberger_image1 from "../../assets/product_images/Rothenberger_images/gas torch.jpg";
import rothenberger_image2 from "../../assets/product_images/Rothenberger_images/hydraulic bender.jpg";
import rothenberger_image3 from "../../assets/product_images/Rothenberger_images/leak detector.jpg";
import rothenberger_image4 from "../../assets/product_images/Rothenberger_images/manifold gauge set.jpg";
import rothenberger_image5 from "../../assets/product_images/Rothenberger_images/manual threading set.jpg";
import rothenberger_image6 from "../../assets/product_images/Rothenberger_images/map gas.jpg";
import rothenberger_image7 from "../../assets/product_images/Rothenberger_images/multigas.jpg";
import rothenberger_image8 from "../../assets/product_images/Rothenberger_images/pipe wrenches.jpg";
import rothenberger_image9 from "../../assets/product_images/Rothenberger_images/ppr cutter.jpg";
import rothenberger_image10 from "../../assets/product_images/Rothenberger_images/pressure test pump.jpg";
import rothenberger_image11 from "../../assets/product_images/Rothenberger_images/refrigerant recovery device.jpg";
import rothenberger_image12 from "../../assets/product_images/Rothenberger_images/rofire.jpg";
import rothenberger_image13 from "../../assets/product_images/Rothenberger_images/thermometer.jpg";
import rothenberger_image14 from "../../assets/product_images/Rothenberger_images/threading machine.jpg";
import rothenberger_image15 from "../../assets/product_images/Rothenberger_images/tube cutter.jpg";


// Abrasive, Drill Bits & Lathing Tools
 
import abrasive_images1 from '../../assets/product_images/Abrasive_Drill Bits_images/broach cutter.jpg'
import abrasive_images2 from '../../assets/product_images/Abrasive_Drill Bits_images/carbide burr.jpg'
import abrasive_images3 from '../../assets/product_images/Abrasive_Drill Bits_images/conduit die set.jpg'
import abrasive_images4 from '../../assets/product_images/Abrasive_Drill Bits_images/cup stone disc.jpg'
import abrasive_images5 from '../../assets/product_images/Abrasive_Drill Bits_images/cup wire brush.jpg'
import abrasive_images6 from '../../assets/product_images/Abrasive_Drill Bits_images/cutting disc.jpg'
import abrasive_images7 from '../../assets/product_images/Abrasive_Drill Bits_images/diamond grinding disc.jpg'
import abrasive_images8 from '../../assets/product_images/Abrasive_Drill Bits_images/drill bits.jpg'
import abrasive_images9 from '../../assets/product_images/Abrasive_Drill Bits_images/flap disc.jpg'
import abrasive_images10 from '../../assets/product_images/Abrasive_Drill Bits_images/flap wheel.jpg'
import abrasive_images11 from '../../assets/product_images/Abrasive_Drill Bits_images/grinding disc.jpg'
import abrasive_images12 from '../../assets/product_images/Abrasive_Drill Bits_images/hss drill bit.jpg'
import abrasive_images13 from '../../assets/product_images/Abrasive_Drill Bits_images/lathing tools.jpg'
import abrasive_images14 from '../../assets/product_images/Abrasive_Drill Bits_images/pink grinding stones.jpg'
import abrasive_images15 from '../../assets/product_images/Abrasive_Drill Bits_images/sand paper roll+.jpg'
import abrasive_images16 from '../../assets/product_images/Abrasive_Drill Bits_images/sand paper.jpg'
import abrasive_images17 from '../../assets/product_images/Abrasive_Drill Bits_images/tap handle.jpg'
import abrasive_images18 from '../../assets/product_images/Abrasive_Drill Bits_images/tap set.jpg'
import abrasive_images19 from '../../assets/product_images/Abrasive_Drill Bits_images/threading die.jpg'
import abrasive_images20 from '../../assets/product_images/Abrasive_Drill Bits_images/wooden drill bit.jpg'


// Crimping & Networking Tools
import crimping_images1 from '../../assets/product_images/Crimping_images/analog multi meter.jpg'
import crimping_images2 from '../../assets/product_images/Crimping_images/boot lace crimping tool.jpg'
import crimping_images3 from '../../assets/product_images/Crimping_images/cable puncher.jpg'
import crimping_images4 from '../../assets/product_images/Crimping_images/cable tie tightening gun.jpg'
import crimping_images5 from '../../assets/product_images/Crimping_images/cable tie.jpg'
import crimping_images6 from '../../assets/product_images/Crimping_images/clamp meter.jpg'
import crimping_images7 from '../../assets/product_images/Crimping_images/desoldering pump.jpg'
import crimping_images8 from '../../assets/product_images/Crimping_images/digital multimeter.jpg'
import crimping_images9 from '../../assets/product_images/Crimping_images/hydraulic crimping tool.jpg'
import crimping_images10 from '../../assets/product_images/Crimping_images/manual crimping tool.jpg'
import crimping_images11 from '../../assets/product_images/Crimping_images/modular crimping tool.jpg'
import crimping_images12 from '../../assets/product_images/Crimping_images/soldering flux.jpg'
import crimping_images13 from '../../assets/product_images/Crimping_images/soldering iron.jpg'
import crimping_images14 from '../../assets/product_images/Crimping_images/soldering station.jpg'
import crimping_images15 from '../../assets/product_images/Crimping_images/soldering wire.jpg'
import crimping_images16 from '../../assets/product_images/Crimping_images/tool kit.jpg'

// Measuring Jars & Instruments
import mesuring_jar_images1 from '../../assets/product_images/Measuring_Jars_images/anemometer.jpg'
import mesuring_jar_images2 from '../../assets/product_images/Measuring_Jars_images/digital vernier.jpg'
import mesuring_jar_images3 from '../../assets/product_images/Measuring_Jars_images/distance meter.jpg'
import mesuring_jar_images4 from '../../assets/product_images/Measuring_Jars_images/divider spring.jpg'
import mesuring_jar_images5 from '../../assets/product_images/Measuring_Jars_images/feeler gauge.jpg'
import mesuring_jar_images6 from '../../assets/product_images/Measuring_Jars_images/infrared.jpg'
import mesuring_jar_images7 from '../../assets/product_images/Measuring_Jars_images/measuring jar.jpg'
import mesuring_jar_images8 from '../../assets/product_images/Measuring_Jars_images/measuring tap.jpg'
import mesuring_jar_images9 from '../../assets/product_images/Measuring_Jars_images/metal jerrycan.jpg'
import mesuring_jar_images10 from '../../assets/product_images/Measuring_Jars_images/micrometer.jpg'
import mesuring_jar_images11 from '../../assets/product_images/Measuring_Jars_images/oil can.jpg'
import mesuring_jar_images12 from '../../assets/product_images/Measuring_Jars_images/oil jugs.jpg'
import mesuring_jar_images13 from '../../assets/product_images/Measuring_Jars_images/pitch gauge.jpg'
import mesuring_jar_images14 from '../../assets/product_images/Measuring_Jars_images/plastic jerrycan.jpg'
import mesuring_jar_images15 from '../../assets/product_images/Measuring_Jars_images/pressure gauges.jpg'
import mesuring_jar_images16 from '../../assets/product_images/Measuring_Jars_images/protractor.jpg'
import mesuring_jar_images17 from '../../assets/product_images/Measuring_Jars_images/rolrt312.jpg'
import mesuring_jar_images18 from '../../assets/product_images/Measuring_Jars_images/scoop.jpg'
import mesuring_jar_images19 from '../../assets/product_images/Measuring_Jars_images/steel ruler.jpg'
import mesuring_jar_images20 from '../../assets/product_images/Measuring_Jars_images/taper gauge.jpg'
import mesuring_jar_images21 from '../../assets/product_images/Measuring_Jars_images/temperature.jpg'
import mesuring_jar_images22 from '../../assets/product_images/Measuring_Jars_images/vernier.jpg'

// Fasteners, Anchors & Fixings
import fasteners_images1 from '../../assets/product_images/Fasteners_images/allen bolt.jpg'
import fasteners_images2 from '../../assets/product_images/Fasteners_images/anchor bolt.jpg'
import fasteners_images3 from '../../assets/product_images/Fasteners_images/bolts and nuts.jpg'
import fasteners_images4 from '../../assets/product_images/Fasteners_images/chicago coupling.jpg'
import fasteners_images5 from '../../assets/product_images/Fasteners_images/circlips.jpg'
import fasteners_images6 from '../../assets/product_images/Fasteners_images/concrete nails.jpg'
import fasteners_images7 from '../../assets/product_images/Fasteners_images/dome nuts.jpg'
import fasteners_images8 from '../../assets/product_images/Fasteners_images/double bolt clamp.jpg'
import fasteners_images9 from '../../assets/product_images/Fasteners_images/dowel pins.jpg'
import fasteners_images10 from '../../assets/product_images/Fasteners_images/drawer slides.jpg'
import fasteners_images11 from '../../assets/product_images/Fasteners_images/drop in anchor.jpg'
import fasteners_images12 from '../../assets/product_images/Fasteners_images/fix bolts.jpg'
import fasteners_images13 from '../../assets/product_images/Fasteners_images/grub screws.jpg'
import fasteners_images14 from '../../assets/product_images/Fasteners_images/hanging clamps.jpg'
import fasteners_images15 from '../../assets/product_images/Fasteners_images/hinges.jpg'
import fasteners_images16 from '../../assets/product_images/Fasteners_images/j bolt.jpg'
import fasteners_images17 from '../../assets/product_images/Fasteners_images/jubilee clamps.jpg'
import fasteners_images18 from '../../assets/product_images/Fasteners_images/r clips.jpg'
import fasteners_images19 from '../../assets/product_images/Fasteners_images/rivets.jpg'
import fasteners_images20 from '../../assets/product_images/Fasteners_images/screws.jpg'
import fasteners_images21 from '../../assets/product_images/Fasteners_images/shackles.jpg'
import fasteners_images22 from '../../assets/product_images/Fasteners_images/single bolt clamps.jpg'
import fasteners_images23 from '../../assets/product_images/Fasteners_images/split pin.jpg'
import fasteners_images24 from '../../assets/product_images/Fasteners_images/spring nuts.jpg'
import fasteners_images25 from '../../assets/product_images/Fasteners_images/threaded rod.jpg'
import fasteners_images26 from '../../assets/product_images/Fasteners_images/two ear clips.jpg'
import fasteners_images27 from '../../assets/product_images/Fasteners_images/whip check.jpg'
import fasteners_images28 from '../../assets/product_images/Fasteners_images/wing nuts.jpg'
import fasteners_images29 from '../../assets/product_images/Fasteners_images/wire nail.jpg'
import fasteners_images30 from '../../assets/product_images/Fasteners_images/wire rope clips.jpg'


// Castors & Scaffolding Products
 import castors_images1 from '../../assets/product_images/Castors_images/castor wheel a.jpg'
 import castors_images2 from '../../assets/product_images/Castors_images/castor wheel b.jpg'
 import castors_images3 from '../../assets/product_images/Castors_images/castor wheel c.jpg'
 import castors_images4 from '../../assets/product_images/Castors_images/castor wheel d.jpg'
 import castors_images5 from '../../assets/product_images/Castors_images/castor wheel e.jpg'
 import castors_images6 from '../../assets/product_images/Castors_images/castor wheel f.jpg'
 import castors_images7 from '../../assets/product_images/Castors_images/castor wheel.jpg'
 import castors_images8 from '../../assets/product_images/Castors_images/double side wrench.jpg'
 import castors_images9 from '../../assets/product_images/Castors_images/scaffolding bag.jpg'
 import castors_images10 from '../../assets/product_images/Castors_images/scaffolding castor wheel.jpg'
 import castors_images11 from '../../assets/product_images/Castors_images/scaffolding hammer.jpg'
 import castors_images12 from '../../assets/product_images/Castors_images/scaffolding ladder.jpg'
 import castors_images13 from '../../assets/product_images/Castors_images/scaffolding leather belt.jpg'
 import castors_images14 from '../../assets/product_images/Castors_images/scaffolding level.jpg'
 import castors_images15 from '../../assets/product_images/Castors_images/scaffolding spanner.jpg'
 import castors_images16 from '../../assets/product_images/Castors_images/scaffolding tag.jpg'
 import castors_images17 from '../../assets/product_images/Castors_images/scaffolding tool holder.jpg'

//  Tools & Building Materials
 import tools_Image1 from '../../assets/product_images/Tools & Building Materials_images/adjustable spanner.jpg'
 import tools_Image2 from '../../assets/product_images/Tools & Building Materials_images/allen key.jpg'
 import tools_Image3 from '../../assets/product_images/Tools & Building Materials_images/bar bending keys.jpg'
 import tools_Image4 from '../../assets/product_images/Tools & Building Materials_images/bar bending plate.jpg'
 import tools_Image5 from '../../assets/product_images/Tools & Building Materials_images/bench vise.jpg'
 import tools_Image6 from '../../assets/product_images/Tools & Building Materials_images/binding wire.jpg'
 import tools_Image7 from '../../assets/product_images/Tools & Building Materials_images/bolt cutter.jpg'
 import tools_Image8 from '../../assets/product_images/Tools & Building Materials_images/c clamp.jpg'
 import tools_Image9 from '../../assets/product_images/Tools & Building Materials_images/chisels.jpg'
 import tools_Image10 from '../../assets/product_images/Tools & Building Materials_images/die handle.jpg'
 import tools_Image11 from '../../assets/product_images/Tools & Building Materials_images/duct tape.jpg'
 import tools_Image12 from '../../assets/product_images/Tools & Building Materials_images/filter catridge.jpg'
 import tools_Image13 from '../../assets/product_images/Tools & Building Materials_images/foam tape.jpg'
 import tools_Image14 from '../../assets/product_images/Tools & Building Materials_images/garden rake.jpg'
 import tools_Image15 from '../../assets/product_images/Tools & Building Materials_images/gi bucket.jpg'
 import tools_Image16 from '../../assets/product_images/Tools & Building Materials_images/green mesh.jpg'
 import tools_Image17 from '../../assets/product_images/Tools & Building Materials_images/hammer.jpg'
 import tools_Image18 from '../../assets/product_images/Tools & Building Materials_images/hammering.jpg'
 import tools_Image19 from '../../assets/product_images/Tools & Building Materials_images/inspection mirror.jpg'
 import tools_Image20 from '../../assets/product_images/Tools & Building Materials_images/insulation tapes.jpg'
 import tools_Image21 from '../../assets/product_images/Tools & Building Materials_images/kerb stone lifter.jpg'
 import tools_Image22 from '../../assets/product_images/Tools & Building Materials_images/levels.jpg'
 import tools_Image23 from '../../assets/product_images/Tools & Building Materials_images/magnet.jpg'
 import tools_Image24 from '../../assets/product_images/Tools & Building Materials_images/masking tape.jpg'
 import tools_Image25 from '../../assets/product_images/Tools & Building Materials_images/metal files.jpg'
 import tools_Image26 from '../../assets/product_images/Tools & Building Materials_images/orange mesh.jpg'
 import tools_Image27 from '../../assets/product_images/Tools & Building Materials_images/paint brush.jpg'
 import tools_Image28 from '../../assets/product_images/Tools & Building Materials_images/paint markers.jpg'
 import tools_Image29 from '../../assets/product_images/Tools & Building Materials_images/paint rollers.jpg'
 import tools_Image30 from '../../assets/product_images/Tools & Building Materials_images/pick axe.jpg'
 import tools_Image31 from '../../assets/product_images/Tools & Building Materials_images/pipe vise.jpg'
 import tools_Image32 from '../../assets/product_images/Tools & Building Materials_images/pipe wrenches.jpg'
 import tools_Image33 from '../../assets/product_images/Tools & Building Materials_images/plug and socket industrial.jpg'
 import tools_Image34 from '../../assets/product_images/Tools & Building Materials_images/pvc bucket.jpg'
 import tools_Image35 from '../../assets/product_images/Tools & Building Materials_images/ratchets.jpg'
 import tools_Image36 from '../../assets/product_images/Tools & Building Materials_images/rubber sheet.jpg'
 import tools_Image37 from '../../assets/product_images/Tools & Building Materials_images/scrapper.jpg'
 import tools_Image38 from '../../assets/product_images/Tools & Building Materials_images/screw bits.jpg'
 import tools_Image39 from '../../assets/product_images/Tools & Building Materials_images/screw drivers.jpg'
 import tools_Image40 from '../../assets/product_images/Tools & Building Materials_images/shovel.jpg'
 import tools_Image41 from '../../assets/product_images/Tools & Building Materials_images/silicone gun.jpg'
 import tools_Image42 from '../../assets/product_images/Tools & Building Materials_images/sockets.jpg'
 import tools_Image43 from '../../assets/product_images/Tools & Building Materials_images/spanner set.jpg'
 import tools_Image44 from '../../assets/product_images/Tools & Building Materials_images/spray paint.jpg'
 import tools_Image45 from '../../assets/product_images/Tools & Building Materials_images/tool box.jpg'
 import tools_Image46 from '../../assets/product_images/Tools & Building Materials_images/torx key.jpg'
 import tools_Image47 from '../../assets/product_images/Tools & Building Materials_images/trolly.jpg'
 import tools_Image48 from '../../assets/product_images/Tools & Building Materials_images/utility knife.jpg'
 import tools_Image49 from '../../assets/product_images/Tools & Building Materials_images/vde screwdrivers.jpg'
 import tools_Image50 from '../../assets/product_images/Tools & Building Materials_images/wheel barrow.jpg'

//  Electrical, Plumbing & Paints

import electrical_images1 from '../../assets/product_images/Electrical_images/circuit breaker.jpg'
import electrical_images2 from '../../assets/product_images/Electrical_images/conduit flexible pipe.jpg'
import electrical_images3 from '../../assets/product_images/Electrical_images/electric pipe.jpg'
import electrical_images4 from '../../assets/product_images/Electrical_images/electrical cable.jpg'
import electrical_images5 from '../../assets/product_images/Electrical_images/exhaust fan.jpg'
import electrical_images6 from '../../assets/product_images/Electrical_images/extension code.jpg'
import electrical_images7 from '../../assets/product_images/Electrical_images/gi fittings.jpg'
import electrical_images8 from '../../assets/product_images/Electrical_images/gi pipe.jpg'
import electrical_images9 from '../../assets/product_images/Electrical_images/hempel paint.jpg'
import electrical_images10 from '../../assets/product_images/Electrical_images/jotun paint.jpg'
import electrical_images11 from '../../assets/product_images/Electrical_images/national paint.jpg'
import electrical_images12 from '../../assets/product_images/Electrical_images/ppr fittings.jpg'
import electrical_images13 from '../../assets/product_images/Electrical_images/pvc conduit pipe.jpg'
import electrical_images14 from '../../assets/product_images/Electrical_images/pvc pipes & fittings.jpg'
import electrical_images15 from '../../assets/product_images/Electrical_images/thinner.jpg'
import electrical_images16 from '../../assets/product_images/Electrical_images/tube light.jpg'
import electrical_images17 from '../../assets/product_images/Electrical_images/universal socket.jpg'
import electrical_images18 from '../../assets/product_images/Electrical_images/upvc fittings.jpg'
import electrical_images19 from '../../assets/product_images/Electrical_images/water tank.jpg'
import electrical_images20 from '../../assets/product_images/Electrical_images/wire connector.jpg'

// Oil, Gas & Pneumatic Fittings
import oil_gas_images1 from '../../assets/product_images/Oil, Gas _images/assorted copper washer.jpg'
import oil_gas_images2 from '../../assets/product_images/Oil, Gas _images/assorted split pin.jpg'
import oil_gas_images3 from '../../assets/product_images/Oil, Gas _images/beach umbrella.jpg'
import oil_gas_images4 from '../../assets/product_images/Oil, Gas _images/camlocks.jpg'
import oil_gas_images5 from '../../assets/product_images/Oil, Gas _images/cargo lashing belt.jpg'
import oil_gas_images6 from '../../assets/product_images/Oil, Gas _images/flat hose.jpg'
import oil_gas_images7 from '../../assets/product_images/Oil, Gas _images/flexible green hose.jpg'
import oil_gas_images8 from '../../assets/product_images/Oil, Gas _images/garden hose.jpg'
import oil_gas_images9 from '../../assets/product_images/Oil, Gas _images/transparent hoses.jpg'
import oil_gas_images10 from '../../assets/product_images/Oil, Gas _images/gland packing.jpg'
import oil_gas_images11 from '../../assets/product_images/Oil, Gas _images/manila rope.jpg'
import oil_gas_images12 from '../../assets/product_images/Oil, Gas _images/mist fan.jpg'
import oil_gas_images13 from '../../assets/product_images/Oil, Gas _images/non sparking shovels.jpg'
import oil_gas_images14 from '../../assets/product_images/Oil, Gas _images/nylon rope.jpg'
import oil_gas_images15 from '../../assets/product_images/Oil, Gas _images/pneumatic fittings.jpg'
import oil_gas_images16 from '../../assets/product_images/Oil, Gas _images/pp rope.jpg'
import oil_gas_images17 from '../../assets/product_images/Oil, Gas _images/quick couplings.jpg'
import oil_gas_images18 from '../../assets/product_images/Oil, Gas _images/rubber hose.jpg'
import oil_gas_images19 from '../../assets/product_images/Oil, Gas _images/steel braided hose.jpg'
import oil_gas_images20 from '../../assets/product_images/Oil, Gas _images/teflon sheet.jpg'

// categories
import categories_image1 from '../../assets/category_images/safty_image1.jpg'
import categories_image2 from '../../assets/category_images/safety_products.jpg'
import categories_image3 from '../../assets/category_images/housekeeping_images.jpg'
import categories_image4 from '../../assets/category_images/welding_images.jpg'
import categories_image5 from '../../assets/category_images/Adhesive, Lubricants & Sealants_images.jpg'
import categories_image6 from '../../assets/category_images/air_images.jpg'
import categories_image7 from '../../assets/category_images/Rothenberger_images.jpg'
import categories_image8 from '../../assets/category_images/Abrasive, Drill Bits & Lathing Tools_image.jpg'
import categories_image9 from '../../assets/category_images/Crimping & Networking Tools_image.jpg'
import categories_image10 from '../../assets/category_images/ANEMOMETER_image.jpg'
import categories_image11 from '../../assets/category_images/Fasteners, Anchors & Fixings_image.jpg'
import categories_image12 from '../../assets/category_images/Castors & Scaffolding Products_image.jpg'
import categories_image13 from '../../assets/category_images/Tools & Building Materials_image.jpg'
import categories_image14 from '../../assets/category_images/Electrical, Plumbing & Paints_images.jpg'
import categories_image15 from '../../assets/category_images/Oil, Gas & Pneumatic Fittings_images.jpg'
import api from "../../admin_side/service";
import { BackendUrls } from "../../admin_side/Backend_Endpoints";


// export const categories = [
//   {
//     name: "Safety Products",
//     path: "safety-products",
//     image: card1,
//     subcategories: [
//       {
//         name: "Head Protection",
//         path: "head-protection",
//         products: [
//           { name: "Helmet A", image: productImage1, price: "$50" },
//           { name: "Helmet B", image: productImage2, price: "$60" },
//           { name: "Helmet B", image: productImage3, price: "$60" },
//           { name: "Helmet B", image: productImage4, price: "$60" },
//         ],
//       },
//       {
//         name: "Ear Protection",
//         path: "ear-protection",
//         products: [
//           { name: "Ear Muffs A", image: productImage3, price: "$30" },
//           { name: "Ear Plugs B", image: productImage4, price: "$20" },
//           { name: "Ear Plugs c", image: productImage4, price: "$20" },
//           { name: "Ear Plugs d", image: productImage4, price: "$20" },
//         ],
//       },
//       {
//         name: "Eye Protection",
//         path: "eye-protection",
//         products: [
//           { name: "Goggles A", image: productImage5, price: "$25" },
//           { name: "Face Shield B", image: productImage6, price: "$40" },
//         ],
//       },
//       {
//         name: "Respiration",
//         path: "respiration",
//         products: [
//           { name: "Respirator A", image: productImage7, price: "$55" },
//           { name: "Dust Mask B", image: productImage8, price: "$15" },
//         ],
//       },
//       {
//         name: "Hand Protection",
//         path: "hand-protection",
//         products: [
//           { name: "Gloves A", image: productImage9, price: "$10" },
//           {
//             name: "Cut-Resistant Gloves B",
//             image: productImage10,
//             price: "$20",
//           },
//         ],
//       },
//       {
//         name: "Leg Protection",
//         path: "leg-protection",
//         products: [
//           { name: "Knee Pads A", image: productImage12, price: "$30" },
//           { name: "Shin Guards B", image: productImage13, price: "$25" },
//         ],
//       },
//       {
//         name: "Welding Protection",
//         path: "welding-protection",
//         products: [
//           { name: "Welding Helmet A", image: productImage14, price: "$70" },
//           { name: "Welding Gloves B", image: productImage15, price: "$40" },
//         ],
//       },
//       {
//         name: "Safety Work Wares",
//         path: "safety-work-wares",
//         products: [
//           { name: "Work Boots A", image: productImage16, price: "$80" },
//           { name: "Work Jacket B", image: productImage17, price: "$60" },
//         ],
//       },
//       {
//         name: "Other Safety Protection",
//         path: "other-safety-protection",
//         products: [
//           { name: "First Aid Kit A", image: productImage18, price: "$45" },
//           { name: "Safety Vest B", image: productImage19, price: "$35" },
//         ],
//       },
//     ],
//   },

//   {
//     name: "Specialised Products",
//     path: "specialised-products",
//     image: card2,
//     products: [
//       { name: "Specialised Product 1", price: "$15", image: productImage4 },
//       { name: "Specialised Product 2", price: "$25", image: productImage5 },
//     ],
//   },
//   {
//     name: "Housekeeping Products",
//     path: "housekeeping-products",
//     image: card3,
//     products: [
//       { name: "Housekeeping Product 1", price: "$5", image: productImage6 },
//       { name: "Housekeeping Product 2", price: "$8", image: productImage7 },
//     ],
//   },
//   {
//     name: "Welding Related Materials",
//     path: "welding-related-materials",
//     image: card4,
//     products: [
//       { name: "Welding Material 1", price: "$12", image: productImage8 },
//       { name: "Welding Material 2", price: "$18", image: productImage9 },
//     ],
//   },
//   {
//     name: "Adhesive, Lubricants & Sealants",
//     path: "adhesive-lubricants-sealants",
//     image: card5,
//     products: [
//       { name: "Adhesive 1", price: "$6", image: productImage10 },
//       { name: "Lubricant 1", price: "$14", image: productImage11 },
//     ],
//   },
//   {
//     name: "Air Conditioning Supplies & Parts",
//     path: "air-conditioning-supplies-parts",
//     image: card6,
//     products: [
//       { name: "AC Part 1", price: "$30", image: productImage12 },
//       { name: "AC Part 2", price: "$45", image: productImage13 },
//     ],
//   },
//   {
//     name: "Rothenberger",
//     path: "rothenberger",
//     image: card1,
//     products: [
//       { name: "Rothenberger Product 1", price: "$22", image: productImage14 },
//       { name: "Rothenberger Product 2", price: "$28", image: productImage15 },
//     ],
//   },
//   {
//     name: "Abrasive, Drill Bits & Lathing Tools",
//     path: "abrasive-drill-bits-lathing-tools",
//     image: card2,
//     products: [
//       { name: "Abrasive Tool 1", price: "$7", image: productImage16 },
//       { name: "Drill Bit 1", price: "$12", image: productImage17 },
//     ],
//   },
//   {
//     name: "Crimping & Networking Tools",
//     path: "crimping-networking-tools",
//     image: card3,
//     products: [
//       { name: "Crimping Tool 1", price: "$9", image: productImage18 },
//       { name: "Networking Tool 1", price: "$16", image: productImage19 },
//     ],
//   },
//   {
//     name: "Measuring Jars & Instruments",
//     path: "measuring-jars-instruments",
//     image: card4,
//     products: [
//       { name: "Measuring Jar 1", price: "$3", image: productImage20 },
//       { name: "Instrument 1", price: "$13", image: productImage21 },
//     ],
//   },
//   {
//     name: "Fasteners, Anchors & Fixings",
//     path: "fasteners-anchors-fixings",
//     image: card5,
//     products: [
//       { name: "Fastener 1", price: "$2", image: productImage22 },
//       { name: "Anchor 1", price: "$4", image: productImage23 },
//     ],
//   },
//   {
//     name: "Castors & Scaffolding Products",
//     path: "castors-scaffolding-products",
//     image: card6,
//     products: [
//       { name: "Castor 1", price: "$5", image: productImage24 },
//       { name: "Scaffolding Product 1", price: "$20", image: productImage25 },
//     ],
//   },
//   {
//     name: "Tools & Building Materials",
//     path: "tools-building-materials",
//     image: card1,
//     products: [
//       { name: "Tool 1", price: "$10", image: productImage26 },
//       { name: "Building Material 1", price: "$30", image: productImage27 },
//     ],
//   },
//   {
//     name: "Electrical, Plumbing & Paints",
//     path: "electrical-plumbing-paints",
//     image: card2,
//     products: [
//       { name: "Electrical Item 1", price: "$15", image: productImage28 },
//       { name: "Plumbing Item 1", price: "$25", image: productImage29 },
//     ],
//   },
//   {
//     name: "Oil, Gas & Pneumatic Fittings",
//     path: "oil-gas-pneumatic-fittings",
//     image: card3,
//     products: [
//       { name: "Oil Fitting 1", price: "$12", image: productImage30 },
//       { name: "Gas Fitting 1", price: "$18", image: productImage31 },
//     ],
//   },
// ];
export const categories = [
  {
    id: 1,
    name: "Safety Products",
    path: "safety-products",
    image: categories_image1,
    subcategories: [
      {
        id: 1,
        name: "Head Protection",
        path: "head-protection",
        products: [
          { id: 1, name: "BUMB CAP", image: head_image1 },
          { id: 2, name: "CHIN STRAP", image: head_image2 },
          { id: 3, name: "RATCHET HELMET", image: head_image3 },
          { id: 4, name: "SAFETY HELMET", image: head_image4 },
        ],
      },
      {
        id: 2,
        name: "Ear Protection",
        path: "ear-protection",
        products: [
          { id: 5, name: "EAR BAND", image: ear_image_1, price: 30 },
          {
            id: 6,
            name: "EAR MUFF HELMET MOUNTED",
            image: ear_image_2,
            price: 20,
          },
          { id: 7, name: "EAR MUFF", image: ear_image_3, price: 20 },
          { id: 8, name: "EAR PLUG", image: ear_image_4, price: 20 },
        ],
      },
      {
        id: 3,
        name: "Eye Protection",
        path: "eye-protection",
        products: [
          { id: 9, name: "CHEMICAL GOGGLE", image: eye_images1, price: 25 },
          { id: 101, name: "FACE SHIELD", image: eye_images2, price: 40 },
          { id: 102, name: "OVER GLASS", image: eye_images3, price: 40 },
          { id: 103, name: "SAFETY GLASS", image: eye_images4, price: 40 },
        ],
      },
      {
        id: 4,
        name: "Respiration",
        path: "respiration",
        products: [
          { id: 11, name: "Dust Mask", image: respiration1 },
          { id: 121, name: "FULL FACE MASK", image: respiration2 },
          { id: 122, name: "HALF FACE MASK", image: respiration3 },
          { id: 123, name: "SURGICAL MASK", image: respiration4 },
        ],
      },
      {
        id: 5,
        name: "Hand Protection",
        path: "hand-protection",
        products: [
          { id: 13, name: "ARGON GLOVES", image: hand_image1 },
          { id: 141, name: "BLACK DOTTED GLOVES", image: hand_image2 },
          { id: 142, name: "CHEMICAL RESISTANT GLOVES", image: hand_image3 },
          { id: 143, name: "COTTON GLOVES", image: hand_image4 },
          { id: 144, name: "DOUBLE SIDE DOTTED GLOVES", image: hand_image5 },
          { id: 145, name: "ELECTRICAL GLOVES", image: hand_image6 },
          { id: 146, name: "LATEX GLOVES", image: hand_image7 },
          { id: 147, name: "LEATHER GLOVES", image: hand_image8 },
          { id: 148, name: "RUBBER GLOVES", image: hand_image9 },
          { id: 149, name: "VINYL GLOVES", image: hand_image10 },
        ],
      },
      {
        id: 6,
        name: "Leg Protection",
        path: "leg-protection",
        products: [
          { id: 15, name: "ENGINEERING SHOES", image: leg_images1 },
          { id: 16, name: "GUMBOOTS", image: leg_images2 },
          { id: 16, name: "LABOUR SHOES", image: leg_images3 },
          { id: 16, name: "SHOE WO LACE", image: leg_images4 },
          { id: 16, name: "RUBBER GLOVES", image: leg_images5 },
        ],
      },
      {
        id: 7,
        name: "Welding Protection",
        path: "welding-protection",
        products: [
          { id: 17, name: "WELDER APRON", image: welding_images1 },
          { id: 181, name: "WELDING COVERALL", image: welding_images2 },
          { id: 182, name: "WELDING GOGGLE", image: welding_images3 },
          { id: 183, name: "WELDING HAND SLEEVE", image: welding_images4 },
          { id: 184, name: "WELDING HELMET", image: welding_images5 },
          { id: 185, name: "WELDING LEATHER BOOT", image: welding_images6 },
          { id: 186, name: "WELDING LEATHER GLOVES", image: welding_images7 },
        ],
      },
      {
        id: 8,
        name: "Safety Work Wares",
        path: "safety-work-wares",
        products: [
          { id: 19, name: "COVERALL", image: safty_images1 },
          { id: 201, name: "DISPOSABLE COVERALL", image: safty_images2 },
          { id: 202, name: "DISPOSABLE SHOE COVER", image: safty_images3 },
          { id: 203, name: "FACE COVER", image: safty_images4 },
          { id: 204, name: "FIRE RETARDANT COVERALL", image: safty_images5 },
          { id: 205, name: "RAIN COAT", image: safty_images6 },
          { id: 206, name: "REFLECTOR COVERALL", image: safty_images7 },
          { id: 207, name: "SAFETY HARNESS", image: safty_images8 },
          { id: 208, name: "SAFETY VEST", image: safty_images9 },
          { id: 209, name: "WINTER JACKETS", image: safty_images10 },
        ],
      },
      {
        id: 9,
        name: "Other Safety Protection",
        path: "other-safety-protection",
        products: [
          { id: 21, name: "First Aid Kit A", image: otherSafty_images1 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images2 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images3 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images4 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images5 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images6 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images7 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images8 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images9 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images10 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images11 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images12 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images13 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images14 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images15 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images16 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images17 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images18 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images19 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images20 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images21 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images22 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images23 },
          { id: 22, name: "Safety Vest B", image: otherSafty_images24 },
        ],
      },
      {
        id: 91,
        name: " Lock Out - Tag Out Tools ",
        path: "other-safety-protection",
        products: [
          { id: 21, name: "CABLE LOCKOUT", image: lockout_images1 },
          { id: 221, name: "CIRCUIT BREAKER LOCKS", image: lockout_images2 },
          { id: 222, name: "COMBINATION LOCK", image: lockout_images3 },
          { id: 223, name: "LOCK OUT STATION", image: lockout_images4 },
          { id: 224, name: "LOCK OUT TAGS", image: lockout_images5 },
          { id: 225, name: "LOCK BOX", image: lockout_images6 },
          { id: 226, name: "LOCKOUT HASPS", image: lockout_images7 },
          { id: 227, name: "LOCKOUT PADLOCK", image: lockout_images8 },
          { id: 228, name: "PADLOCK", image: lockout_images9 },
          { id: 229, name: "SCAFFOLDING TAG", image: lockout_images10 },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Specialised Products",
    path: "specialised-products",
    image: categories_image2,
    products: [
      { id: 23, name: "COLOR COTTON RAG COLORS", image: special_images1 },
      { id: 241, name: "WHITE COTTON RAG", image: special_images2 },
      { id: 242, name: "DUCT FAN", image: special_images3 },
      { id: 243, name: "DUCT HOSE", image: special_images4 },
      { id: 244, name: "EMPTY SAND BAG", image: special_images5 },
      { id: 245, name: "FIRE BLANKET ROLL", image: special_images6 },
      { id: 246, name: "FIRE RETARDANT", image: special_images7 },
      { id: 247, name: "HESSIAN CLOTH", image: special_images8 },
      { id: 248, name: "JUMBO BAG", image: special_images9 },
      { id: 249, name: "PLASTIC ZIP BAG", image: special_images10 },
      { id: 2410, name: "POLYTHENE BAG", image: special_images11 },
      { id: 2411, name: "POLYTHENE ROLL", image: special_images12 },
      { id: 2412, name: "TARPAULIN", image: special_images13 },
    ],
  },
  {
    id: 11,
    name: "Housekeeping Products",
    path: "housekeeping-products",
    image: categories_image3,
    products: [
      { id: 25, name: "CAUTION BOARD", image: housekeeping_images1 },
      { id: 261, name: "COCO BROOM", image: housekeeping_images2 },
      { id: 262, name: "FLOOR MAP", image: housekeeping_images3 },
      { id: 263, name: "FLOOR WIPERS", image: housekeeping_images4 },
      { id: 264, name: "GARBAGE BAG", image: housekeeping_images5 },
      { id: 265, name: "GRABBER TOOL", image: housekeeping_images6 },
      { id: 266, name: "HAND BRUSH", image: housekeeping_images7 },
      { id: 267, name: "HARD BROOM", image: housekeeping_images8 },
      { id: 268, name: "MOP BUCKETS", image: housekeeping_images9 },
      { id: 269, name: "MOP TROLLEY", image: housekeeping_images10 },
      { id: 2610, name: "SOAP DISPENSER", image: housekeeping_images11 },
      { id: 2611, name: "SOFT BROOM", image: housekeeping_images12 },
      { id: 2612, name: "SPRAY BOTTLE", image: housekeeping_images13 },
      { id: 2613, name: "SPRAYER BOTTLE", image: housekeeping_images14 },
      { id: 2614, name: "SPRAYER PUMPS", image: housekeeping_images15 },
      { id: 2615, name: "STAINLESS STEEL BIN", image: housekeeping_images16 },
      { id: 2616, name: "SUPRA BIN", image: housekeeping_images17 },
      { id: 2617, name: "WET MOP", image: housekeeping_images18 },
      { id: 2618, name: "WRAPPING ROLL", image: housekeeping_images19 },
      { id: 2619, name: "PLASTIC GARBAGE BIN", image: housekeeping_images20 },
    ],
  },
  {
    id: 12,
    name: "Welding Related Materials",
    path: "welding-related-materials",
    image: categories_image4,
    products: [
      { id: 27, name: "CUTTING NOZZLES", image: welding_related1 },
      { id: 281, name: "CUTTING WELDING SET", image: welding_related2 },
      { id: 282, name: "CYLINDER TROLLY", image: welding_related3 },
      { id: 283, name: "ELECTRODE HOLDER", image: welding_related4 },
      { id: 284, name: "FLASH BACK ARRESTOR", image: welding_related5 },
      { id: 285, name: "HEATING TORCH", image: welding_related6 },
      { id: 286, name: "WELDING CABLE CONNECTORS", image: welding_related7 },
      { id: 287, name: "WELDING CABLE", image: welding_related8 },
      { id: 288, name: "WELDING CHALK", image: welding_related9 },
      { id: 289, name: "WELDING HAMMER", image: welding_related10 },
      { id: 2810, name: "WELDING LIGHTER", image: welding_related11 },
      { id: 2811, name: "WELDING MACHINE", image: welding_related12 },
      { id: 2812, name: "WELDING REGULATORS", image: welding_related13 },
      { id: 2813, name: "WELDING RODS", image: welding_related14 },
      { id: 2814, name: "WELDING TWIN HOSE", image: welding_related15 },
    ],
  },
  {
    id: 13,
    name: "Adhesive, Lubricants & Sealants",
    path: "adhesive-lubricants-sealants",
    image: categories_image5,
    products: [
      { id: 29, name: "ANTI SPATTER SPRAY", image: adhesive_images1 },
      { id: 301, name: "ARALDITE", image: adhesive_images2 },
      { id: 302, name: "BISON KIT", image: adhesive_images3 },
      { id: 303, name: "BISON MONTAGE KIT", image: adhesive_images4 },
      { id: 304, name: "CONTACT CLEANER", image: adhesive_images5 },
      { id: 305, name: "COPASLIP", image: adhesive_images6 },
      { id: 306, name: "CRC CONTACT CLEANER", image: adhesive_images7 },
      { id: 307, name: "CRC GALVA BRITE", image: adhesive_images8 },
      { id: 308, name: "DEVCON PUTTY", image: adhesive_images9 },
      { id: 309, name: "DP CHECKING SPRAYS", image: adhesive_images10 },
      { id: 3010, name: "FEVICOL", image: adhesive_images11 },
      { id: 3011, name: "FIRE RETARDANT FOAM SPRAY", image: adhesive_images12 },
      { id: 3012, name: "GASKET MAKER", image: adhesive_images13 },
      { id: 3013, name: "LAPPING PASTE", image: adhesive_images14 },
      { id: 3014, name: "LOCTITE 454", image: adhesive_images15 },
      { id: 3015, name: "MOLYKOTE", image: adhesive_images16 },
      { id: 3016, name: "MULTI PURPOSE GREASE", image: adhesive_images17 },
      { id: 3017, name: "PU FOAM SPRAY", image: adhesive_images18 },
      { id: 3018, name: "LOCTITE 401", image: adhesive_images19 },
      { id: 3019, name: "SILICONE SPRAY", image: adhesive_images20 },
      { id: 3020, name: "SILICONE", image: adhesive_images21 },
      {
        id: 3021,
        name: "STAINLESS STEEL CLEANER 3M",
        image: adhesive_images22,
      },
      { id: 3022, name: "SUPER GLUE", image: adhesive_images23 },
      { id: 3023, name: "WD 40", image: adhesive_images24 },
      { id: 3024, name: "WEICON THREAD LOCK", image: adhesive_images25 },
      { id: 3025, name: "WEICON ZINC SPRAY", image: adhesive_images26 },
    ],
  },
  {
    id: 14,
    name: "Air Conditioning Supplies & Parts",
    path: "air-conditioning-supplies-parts",
    image: categories_image6,
    products: [
      { id: 31, name: "AC COMPRESSOR", image: airconditioning_images1 },
      { id: 321, name: "AC FAN BLADE", image: airconditioning_images2 },
      { id: 322, name: "AC FAN MOTOR", image: airconditioning_images3 },
      { id: 323, name: "BEARINGS", image: airconditioning_images4 },
      { id: 324, name: "CHARGING VALUE", image: airconditioning_images5 },
      { id: 325, name: "CONTROL BOARD", image: airconditioning_images6 },
      { id: 326, name: "COPPER COIL", image: airconditioning_images7 },
      { id: 327, name: "HEATING ELEMENT", image: airconditioning_images8 },
      { id: 328, name: "MANIFOLD GAUGE", image: airconditioning_images9 },
      { id: 329, name: "REFRIGERANT GAS", image: airconditioning_images10 },
      { id: 3210, name: "RUNNING CAPACITOR", image: airconditioning_images11 },
      { id: 3211, name: "SQUARE CAPACITOR", image: airconditioning_images12 },
      { id: 3212, name: "THERMOSTAT", image: airconditioning_images13 },
    ],
  },
  {
    id: 15,
    name: "Rothenberger",
    path: "rothenberger",
    image: categories_image7,
    products: [
      { id: 33, name: "GAS TORCH", image: rothenberger_image1 },
      { id: 341, name: "HYDRAULIC BENDER", image: rothenberger_image2 },
      { id: 342, name: "LEAK DETECTOR", image: rothenberger_image3 },
      { id: 343, name: "MANIFOLD GAUGE SET", image: rothenberger_image4 },
      { id: 344, name: "MANUAL THREADING SET", image: rothenberger_image5 },
      { id: 345, name: "MAP GAS", image: rothenberger_image6 },
      { id: 346, name: "MULTIGAS", image: rothenberger_image7 },
      { id: 347, name: "PIPE WRENCHES", image: rothenberger_image8 },
      { id: 348, name: "PPR CUTTER", image: rothenberger_image9 },
      { id: 349, name: "PRESSURE TEST PUMP", image: rothenberger_image10 },
      { id: 3410, name: "RECOVERY DEVICE", image: rothenberger_image11 },
      { id: 3411, name: "ROFIRE", image: rothenberger_image12 },
      { id: 3412, name: "THERMOMETER", image: rothenberger_image13 },
      { id: 3413, name: "THREADING MACHINE", image: rothenberger_image14 },
      { id: 3414, name: "TUBE CUTTER", image: rothenberger_image15 },
    ],
  },
  {
    id: 16,
    name: "Abrasive, Drill Bits & Lathing Tools",
    path: "abrasive-drill-bits-lathing-tools",
    image: categories_image8,
    products: [
      { id: 35, name: "BROACH CUTTER",  image: abrasive_images1 },
      { id: 361, name: "CARBIDE BURR", image: abrasive_images2 },
      { id: 362, name: "CONDUIT DIE SET", image: abrasive_images3 },
      { id: 363, name: "CUP STONE DISC", image: abrasive_images4 },
      { id: 364, name: "CUP WIRE BRUSH", image: abrasive_images5 },
      { id: 365, name: "CUTTING DISC", image: abrasive_images6 },
      { id: 366, name: "DIAMOND GRINDING DISC", image: abrasive_images7 },
      { id: 367, name: "DRILL BITS", image: abrasive_images8 },
      { id: 368, name: "FLAP DISC", image: abrasive_images9 },
      { id: 369, name: "FLAP WHEEL", image: abrasive_images10 },
      { id: 3610, name: "GRINDING DISC", image: abrasive_images11 },
      { id: 3611, name: "HSS DRILL BIT", image: abrasive_images12 },
      { id: 3612, name: "LATHING TOOLS", image: abrasive_images13 },
      { id: 3613, name: "PINK GRINDING STONES", image: abrasive_images14 },
      { id: 3614, name: "SAND PAPER ROLL+", image: abrasive_images15 },
      { id: 3615, name: "SAND PAPER", image: abrasive_images16 },
      { id: 3616, name: "TAP HANDLE", image: abrasive_images17 },
      { id: 3617, name: "TAP SET", image: abrasive_images18 },
      { id: 3618, name: "THREADING DIE", image: abrasive_images19 },
      { id: 3619, name: "WOODEN DRILL BIT", image: abrasive_images20 },
    ],
  },
  {
    id: 17,
    name: "Crimping & Networking Tools",
    path: "crimping-networking-tools",
    image: categories_image9,
    products: [
      { id: 37, name: "ANALOG MULTI METER", image: crimping_images1 },
      { id: 38, name: "BOOT LACE CRIMPING TOOL", image: crimping_images2 },
      { id: 381, name: "CABLE PUNCHER", image: crimping_images3 },
      { id: 382, name: "CABLE TIE TIGHTENING GUN", image: crimping_images4 },
      { id: 383, name: "CABLE TIE", image: crimping_images5 },
      { id: 384, name: "CLAMP METER", image: crimping_images6 },
      { id: 385, name: "DESOLDERING PUMP", image: crimping_images7 },
      { id: 386, name: "DIGITAL MULTIMETER", image: crimping_images8 },
      { id: 387, name: "HYDRAULIC CRIMPING TOOL", image: crimping_images9 },
      { id: 388, name: "MANUAL CRIMPING TOOL", image: crimping_images10 },
      { id: 389, name: "MODULAR CRIMPING TOOL", image: crimping_images11 },
      { id: 3810, name: "SOLDERING FLUX", image: crimping_images12 },
      { id: 3811, name: "SOLDERING IRON", image: crimping_images13 },
      { id: 3812, name: "SOLDERING STATION", image: crimping_images14 },
      { id: 3813, name: "SOLDERING WIRE", image: crimping_images15 },
      { id: 3814, name: "TOOL KIT", image: crimping_images16 },
    ],
  },
  {
    id: 18,
    name: "Measuring Jars & Instruments",
    path: "measuring-jars-instruments",
    image: categories_image10,
    products: [
      { id: 39, name: "ANEMOMETER", image: mesuring_jar_images1 },
      { id: 40, name: " DIGITAL VERNIER", image: mesuring_jar_images2 },
      { id: 402, name: "DISTANCE METER", image: mesuring_jar_images3 },
      { id: 403, name: "DIVIDER SPRING", image: mesuring_jar_images4 },
      { id: 404, name: "FEELER GAUGE", image: mesuring_jar_images5 },
      { id: 405, name: "INFRARED", image: mesuring_jar_images6 },
      { id: 406, name: "MEASURING JAR", image: mesuring_jar_images7 },
      { id: 407, name: "MEASURING TAP", image: mesuring_jar_images8 },
      { id: 408, name: "METAL JERRYCAN", image: mesuring_jar_images9 },
      { id: 409, name: "MICROMETER", image: mesuring_jar_images10 },
      { id: 4010, name: "OIL CAN", image: mesuring_jar_images11 },
      { id: 4011, name: "OIL JUGS", image: mesuring_jar_images12 },
      { id: 4012, name: "PITCH GAUGE", image: mesuring_jar_images13 },
      { id: 4013, name: "PLASTIC JERRYCAN", image: mesuring_jar_images14 },
      { id: 4014, name: "PRESSURE GAUGES", image: mesuring_jar_images15 },
      { id: 4015, name: "PROTRACTOR", image: mesuring_jar_images16 },
      { id: 4016, name: "MEASURING WHEEL", image: mesuring_jar_images17 },
      { id: 4017, name: "SCOOP", image: mesuring_jar_images18 },
      { id: 4018, name: "STEEL RULER", image: mesuring_jar_images19 },
      { id: 4019, name: "TAPER GAUGE", image: mesuring_jar_images20 },
      { id: 4020, name: "TEMPERATURE", image: mesuring_jar_images21 },
      { id: 4021, name: "VERNIER", image: mesuring_jar_images22 },
    ],
  },
  {
    id: 19,
    name: "Fasteners, Anchors & Fixings",
    path: "fasteners-anchors-fixings",
    image: categories_image11,
    products: [
      { id: 41, name: " ALLEN BOLT",  image: fasteners_images1 },
      { id: 42, name: "ANCHOR BOLT",  image: fasteners_images2 },
      { id: 423, name: "BOLTS AND NUTS",  image: fasteners_images3 },
      { id: 424, name: "CHICAGO COUPLING",  image: fasteners_images4 },
      { id: 425, name: "CIRCLIPS",  image: fasteners_images5 },
      { id: 426, name: "CONCRETE NAILS",  image: fasteners_images6 },
      { id: 427, name: "DOME NUTS",  image: fasteners_images7 },
      { id: 428, name: "DOUBLE BOLT CLAMP",  image: fasteners_images8 },
      { id: 429, name: "DOWEL PINS",  image: fasteners_images9 },
      { id: 4210, name: "DRAWER SLIDES",  image: fasteners_images10 },
      { id: 4211, name: "DROP IN ANCHOR",  image: fasteners_images11 },
      { id: 4212, name: "FIX BOLTS",  image: fasteners_images12 },
      { id: 4213, name: "GRUB SCREWS",  image: fasteners_images13 },
      { id: 4214, name: "HANGING CLAMPS",  image: fasteners_images14 },
      { id: 4215, name: "HINGES",  image: fasteners_images15 },
      { id: 4216, name: "J BOLT",  image: fasteners_images16 },
      { id: 4217, name: "JUBILEE CLAMPS",  image: fasteners_images17 },
      { id: 4218, name: "R CLIPS",  image: fasteners_images18 },
      { id: 4219, name: "RIVETS",  image: fasteners_images19 },
      { id: 4220, name: "SCREWS",  image: fasteners_images20 },
      { id: 4221, name: "SCREWS",  image: fasteners_images21 },
      { id: 4222, name: "SINGLE BOLT CLAMPS",  image: fasteners_images22 },
      { id: 4223, name: "SPLIT PIN",  image: fasteners_images23 },
      { id: 4224, name: "SPRING NUTS",  image: fasteners_images24 },
      { id: 4225, name: "THREADED ROD",  image: fasteners_images25 },
      { id: 4226, name: "TWO EAR CLIPS",  image: fasteners_images26 },
      { id: 4227, name: "WHIP CHECK",  image: fasteners_images27 },
      { id: 4228, name: "WING NUTS",  image: fasteners_images28 },
      { id: 4229, name: "WIRE NAIL",  image: fasteners_images29 },
      { id: 4230, name: "WIRE ROPE CLIPS",  image: fasteners_images30 },
    ],
  },
  {
    id: 20,
    name: "Castors & Scaffolding Products",
    path: "castors-scaffolding-products",
    image: categories_image2,
    products: [
      { id: 43, name: "CASTOR WHEEL",  image: castors_images1 },
      {id: 44,name: "CASTOR WHEEL", image: castors_images2,},
      {id: 441,name: "CASTOR WHEEL", image: castors_images3,},
      {id: 442,name: "CASTOR WHEEL", image: castors_images4,},
      {id: 443,name: "CASTOR WHEEL", image: castors_images5,},
      {id: 444,name: "CASTOR WHEEL", image: castors_images6,},
      {id: 445,name: "CASTOR WHEEL", image: castors_images7,},
      {id: 446,name: "DOUBLE SIDE WRENCH", image: castors_images8,},
      {id: 447,name: "SCAFFOLDING BAG", image: castors_images9,},
      {id: 448,name: "SCAFFOLDING CASTOR WHEEL", image: castors_images10,},
      {id: 449,name: "SCAFFOLDING HAMMER", image: castors_images11,},
      {id: 4410,name: "SCAFFOLDING LADDER", image: castors_images12,},
      {id: 4411,name: "SCAFFOLDING LEATHER BELT", image: castors_images13,},
      {id: 4412,name: "SCAFFOLDING TOOL HOLDER", image: castors_images14,},
      {id: 4413,name: "SCAFFOLDING LEVEL", image: castors_images15,},
      {id: 4414,name: "SCAFFOLDING SPANNER", image: castors_images16,},
      {id: 4415,name: "SCAFFOLDING TAG", image: castors_images17,},
    ],
  },
  {
    id: 21,
    name: "Tools & Building Materials",
    path: "tools-building-materials",
    image: categories_image13,
    products: [
      { id: 45, name: "ADJUSTABLE SPANNER", image: tools_Image1 },
      { id: 46, name: "ALLEN KEY",  image: tools_Image2 },
      { id: 461, name: "BAR BENDING KEYS",  image: tools_Image3 },
      { id: 462, name: "BAR BENDING PLATE",  image: tools_Image4 },
      { id: 463, name: "BENCH VISE",  image: tools_Image5 },
      { id: 464, name: "BINDING WIRE",  image: tools_Image6 },
      { id: 465, name: "BOLT CUTTER",  image: tools_Image7 },
      { id: 466, name: "C CLAMP",  image: tools_Image8 },
      { id: 467, name: "CHISELS",  image: tools_Image9 },
      { id: 468, name: "DIE HANDLE",  image: tools_Image10 },
      { id: 469, name: "DUCT TAPE",  image: tools_Image11 },
      { id: 4610, name: "FILTER CATRIDGE",  image: tools_Image12 },
      { id: 4611, name: "FOAM TAPE",  image: tools_Image13 },
      { id: 4612, name: "GARDEN RAKE",  image: tools_Image14 },
      { id: 4613, name: "GI BUCKET",  image: tools_Image15 },
      { id: 4614, name: "GREEN MESH",  image: tools_Image16 },
      { id: 4615, name: "HAMMER",  image: tools_Image17 },
      { id: 4616, name: "HAMMERING",  image: tools_Image18 },
      { id: 4617, name: "INSPECTION MIRROR",  image: tools_Image19 },
      { id: 4618, name: "INSULATION TAPES",  image: tools_Image20 },
      { id: 4619, name: "KERB STONE LIFTER",  image: tools_Image21 },
      { id: 4620, name: "LEVELS",  image: tools_Image22 },
      { id: 4621, name: "BMAGNET",  image: tools_Image23 },
      { id: 4622, name: "MASKING TAPE",  image: tools_Image24 },
      { id: 4623, name: "METAL FILES",  image: tools_Image25 },
      { id: 4624, name: "ORANGE MESH",  image: tools_Image26 },
      { id: 4625, name: "PAINT BRUSH",  image: tools_Image27 },
      { id: 4626, name: "PAINT MARKERS",  image: tools_Image28 },
      { id: 4627, name: "PAINT ROLLERS",  image: tools_Image29 },
      { id: 4628, name: "PICK AXE",  image: tools_Image30 },
      { id: 4629, name: "PIPE VISE",  image:  tools_Image31 },
      { id: 4630, name: "PIPE WRENCHES",  image:  tools_Image32 },
      { id: 4631, name: "PLUG & SOCKET",  image:  tools_Image33 },
      { id: 4632, name: "PVC BUCKET",  image:  tools_Image34 },
      { id: 4633, name: "RATCHETS",  image:  tools_Image35 },
      { id: 4634, name: "RUBBER SHEET",  image:  tools_Image36 },
      { id: 4635, name: "SCRAPPER",  image:  tools_Image37 },
      { id: 4636, name: "SCREW BITS",  image:  tools_Image38 },
      { id: 4637, name: "SCREWDRIVERS",  image:  tools_Image39 },
      { id: 4638, name: "SHOVEL",  image: tools_Image40 },
      { id: 4639, name: "SILICONE GUN",  image: tools_Image41 },
      { id: 4640, name: "SOCKETS",  image: tools_Image42 },
      { id: 4641, name: "SPANNER SET",  image: tools_Image43 },
      { id: 4642, name: "SPRAY PAINT",  image: tools_Image44 },
      { id: 4643, name: "TOOL BOX",  image: tools_Image45 },
      { id: 4644, name: "TORX KEY",  image: tools_Image46 },
      { id: 4645, name: "TROLLY",  image: tools_Image47 },
      { id: 4646, name: "UTILITY KNIFE",  image: tools_Image48 },
      { id: 4647, name: "VDE SCREWDRIVERS",  image: tools_Image49 },
      { id: 4648, name: "WHEEL BARROW",  image: tools_Image50 },
     
    ],
  },
  {
    id: 22,
    name: "Electrical, Plumbing & Paints",
    path: "electrical-plumbing-paints",
    image: categories_image14,
    products: [
      { id: 47, name: "CIRCUIT BREAKER",  image: electrical_images1 },
      { id: 48, name: "CONDUIT FLEXIBLE PIPE",  image: electrical_images2 },
      { id: 482, name: "ELECTRIC PIPE",  image: electrical_images3 },
      { id: 483, name: "ELECTRICAL CABLE",  image: electrical_images4 },
      { id: 484, name: "EXHAUST FAN",  image: electrical_images5 },
      { id: 485, name: "EXTENSION CODE",  image: electrical_images6 },
      { id: 486, name: "GI FITTINGS",  image: electrical_images7 },
      { id: 487, name: "GI PIPE",  image: electrical_images8 },
      { id: 488, name: "HEMPEL PAINT",  image: electrical_images9 },
      { id: 489, name: "JOTUN PAINT",  image: electrical_images10 },
      { id: 4810, name: "NATIONAL PAINT",  image: electrical_images11 },
      { id: 4811, name: "PPR FITTINGS",  image: electrical_images12 },
      { id: 4812, name: "PVC CONDUIT PIPE",  image: electrical_images13 },
      { id: 4813, name: "PVS PIPES & FITTINGS",  image: electrical_images14 },
      { id: 4814, name: "THINNER",  image: electrical_images15 },
      { id: 4815, name: "TUBE LIGHT",  image: electrical_images16 },
      { id: 4816, name: "UNIVERSAL SOCKET",  image: electrical_images17 },
      { id: 4817, name: "UPVC FITTINGS",  image: electrical_images18 },
      { id: 4818, name: "WATER TANK",  image: electrical_images19 },
      { id: 4819, name: "WIRE CONNECTOR",  image: electrical_images20 },
    ],
  },
  {
    id: 23,
    name: "Oil, Gas & Pneumatic Fittings",
    path: "oil-gas-pneumatic-fittings",
    image: categories_image15,
    products: [
      { id: 49, name: "ASSORTED COPPER WASHER",  image: oil_gas_images1 },
      { id: 50, name: "ASSORTED SPLIT PIN",  image: oil_gas_images2 },
      { id: 501, name: "BEACH UMBRELLA",  image: oil_gas_images3 },
      { id: 502, name: "CAMLOCKS",  image: oil_gas_images4 },
      { id: 503, name: "CARGO LASHING BELT",  image: oil_gas_images5 },
      { id: 504, name: "FLAT HOSE",  image: oil_gas_images6 },
      { id: 505, name: "FLEXIBLE GREEN HOSE",  image: oil_gas_images7 },
      { id: 506, name: "GARDEN HOSE",  image: oil_gas_images8 },
      { id: 507, name: "TRANSPARENT HOSES",  image: oil_gas_images9 },
      { id: 508, name: "GLAND PACKING",  image: oil_gas_images10 },
      { id: 509, name: "MANILA ROPE",  image: oil_gas_images11 },
      { id: 5010, name: "MIST FAN",  image: oil_gas_images12 },
      { id: 5011, name: "NON SPARKING SHOVELS",  image: oil_gas_images13 },
      { id: 5012, name: "NYLON ROPE",  image: oil_gas_images14 },
      { id: 5013, name: "PNEUMATIC FITTINGS",  image: oil_gas_images15 },
      { id: 5014, name: "PP ROPE",  image: oil_gas_images16 },
      { id: 5015, name: "QUICK COUPLINGS",  image: oil_gas_images17 },
      { id: 5016, name: "RUBBER HOSE",  image: oil_gas_images18 },
      { id: 5017, name: "STEEL BRAIDED HOSE",  image: oil_gas_images19 },
      { id: 5018, name: "TEFLON SHEET",  image: oil_gas_images20 },
    ],
  },
];

const ProductCategories = () => {
  const [data,setData] = useState([])
  const fetchData = async () =>{
     try{
         const response = await api.get(BackendUrls.category_management)
         if(response.status === 200){
             setData(response.data.data)
         }

     }
     catch(error){
         console.log(error);
         
     }
 }

  useEffect (() => {
     fetchData()
  },[])


  return (
    <div className="container mx-auto p-6">
     
      <div className="content-1-details">
        <Row>
          <div className="section-heading" style={{marginTop:'8rem'}}>
            <div className="heading-text">Our Products</div>
            <div className="heading-desc">An overview of what we do.</div>
          </div>
        </Row>
      </div>
      
      <div className="product-category">

        {data.map((category) => (
          <div className="products_sectionn">
          <h5>{category.name}</h5>

          <Link
            to={`/products/${category.id}`}
            key={category.id}
            className="product-category__card"
          >
            <img
              src={`${process.env.REACT_APP_API_URL}${category.image}`}
              alt=""
              style={{ width: "200px", height: "200px", borderRadius: "2rem" }}
            />
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
