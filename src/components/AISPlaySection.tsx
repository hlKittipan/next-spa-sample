import styles from "../../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Image from "next/image";

export default function AISPlaySection() {
    return (
        <section className={styles.container}>
            <div className={styles.section}>
                <style jsx>{`
                  h1::before {
                    content: ". ";
                    background-color: #b2d235;
                    color: #b2d235;
                    border-radius: 40px;
                    margin-right: 10px;
                  }
                `}</style>
                <h1>Play Box</h1>
                <Box sx={{flexGrow: 1}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={{xs: 1, md: 3}} columns={{xs: 1, sm: 8, md: 12}}
                    >
                        <Grid item xs={12}>
                            <Card>
                                <CardContent sx={{textAlign: 'center'}}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Grid item xs={6}>
                                            <Image src={"/ais_play_logo.png"} alt={"ais play box"} width={80}
                                                   height={30}/>
                                            <div
                                                dangerouslySetInnerHTML={{__html: '<h1 style="color: white; font-size: 28px">ครบทุกความบันเทิง เพื่อทุกคน</h1>'}}/>
                                            <div
                                                dangerouslySetInnerHTML={{__html: '<span style="color: white; font-size: 18px">รับชมได้ทุกที่ ทุกเวลา หนังดัง ซีรีส์ คอนเสิร์ต กีฬา การ์ตูน วาไรตี้ ข่าว และอื่นๆ อีกมากมาย</span>'}}/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <AisPlayMenuSection/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </section>
    )
}

function AisPlayMenuSection() {
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={6}>
                    <div className={styles.box_hover_up_6}>
                    ช่องรายการ
                    <Image src={"/ais_play_logo.png"} alt={"ais play box"} width={128}
                           height={59}/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={styles.box_hover_up_6}>
                    ช่องรายการ
                    <Image src={"/ais_play_premium_logo.png"} alt={"ais play box premium"} width={128}
                           height={59}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}