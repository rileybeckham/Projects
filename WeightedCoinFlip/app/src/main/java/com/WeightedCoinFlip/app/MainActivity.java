package com.WeightedCoinFlip.app;


import android.view.MotionEvent;
import android.view.View;
import android.view.animation.RotateAnimation;
import android.widget.ImageView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import com.WeightedCoinFlip.app.R;

import java.util.Random;

import static java.sql.DriverManager.println;

public class MainActivity extends AppCompatActivity {


    ImageView iv_coin;

    Random r;

    int coinSide;//0-heads 1-tails

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        iv_coin = (ImageView) findViewById(R.id.iv_coin);

        final View t_screen = (View) findViewById(R.id.t_screen);

        r = new Random();

        t_screen.setOnTouchListener(new View.OnTouchListener(){



            @Override
            public boolean onTouch(View v, MotionEvent motionEvent) {
                coinSide = r.nextInt(2);
                float x = motionEvent.getX();
                float y = motionEvent.getY();
                double Xtotal = t_screen.getWidth() * (.5);
                double Ytotal = t_screen.getHeight() * (.5);

                if (x >= Xtotal && y >= Ytotal){
                    iv_coin.setImageResource(R.drawable.heads);
                    Toast.makeText(MainActivity.this, "HEADS!", Toast.LENGTH_SHORT).show();
                }
                else if(coinSide == 0){
                    iv_coin.setImageResource(R.drawable.heads);
                    Toast.makeText(MainActivity.this, "HEADS!", Toast.LENGTH_SHORT).show();
                }
                else if(coinSide == 1){
                    iv_coin.setImageResource(R.drawable.tails);
                    Toast.makeText(MainActivity.this, "TAILS!", Toast.LENGTH_SHORT).show();

                }
                else{
                    println("Error: RANDOM NUMBER");
                }

                RotateAnimation rotate = new RotateAnimation(0, 360,
                        RotateAnimation.RELATIVE_TO_SELF,0.5f, RotateAnimation.RELATIVE_TO_SELF, 0.5f);
                rotate.setDuration(1000);
                iv_coin.startAnimation(rotate);
                return false;

            }
        });

    }
}