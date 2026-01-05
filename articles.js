
// Articles data in JSON format
const articles = {
    "article1": {
        "title": "Steve Jobs' commencement speech",
        "content": [
            {
                "chinese": "我今天很荣幸能和你们一起参加这所世界上最好的大学的毕业典礼。说实话，我从未大学毕业，这该算是我一生中离大学毕业最近的一次了。今天我想向你们讲述我人生中的三个故事，没什么大不了的，只是三个故事而已。",
                "english": "I am honored to be with you today at your commencement from one of the finest universities in the world. Truth be told, I never graduated from college, and this is the closest I've ever gotten to a college graduation. Today I want to tell you three stories from my life. That's it. No big deal. just three stories."
            },
            {
                "chinese": "第一个故事是关于串联生命中的点点滴滴。",
                "english": "[1] The first story is about connecting the dots."
            },
            {
                "chinese": "我在里德大学只读了六个月就退学了，但之后仍作为旁听生呆了一年半后才最终离开。我为什么要退学呢？",
                "english": "I dropped out of Reed College after the first 6 months, but then stayed around as a drop-in for another 18 months or so before I really quit. So why did I drop out？"
            },
            {
                "chinese": "那要从我出生的时候讲起。我的生母是一个年轻的、没有结婚的大学毕业生。她决定让别人收养我，她坚定的认为应当找一对受过高等教育的夫妇。在我出生时她已经安排好让一个律师家庭收养我。但当我出生之时，律师夫妇突然决定想要个女孩。",
                "english": "It started before I was born. My biological mother was a young, unwed college graduate student, and she decided to put me up for adoption. She felt very strongly that I should be adopted by college graduates, so everything was all set for me to be adopted at birth by a lawyer and his wife. Except that when I popped out they decided at the last minute that they really wanted a girl."
            },
            {
                "chinese": "所以在候选名单上我的养父母突然在半夜接到了一个电话\"我们这儿多列一个男孩，你们想要他吗？“，他们回答 \"当然！\"。但是我生母随后发现，我的养母没有大学毕业，我的养父甚至高中就辍学了。她拒绝在最终的收养文件上签字。几个月后她才勉强同意，因为我的父母承诺一定会送我上大学。",
                "english": "So my parents, who were on a waiting list, got a call in the middle of the night asking: \"We have an unexpected baby boy; do you want him？\" They said: \"Of course.\" My biological mother later found out that my mother had never graduated from college and that my father had never graduated from high school. She refused to sign the final adoption papers. She only relented a few months later when my parents promised that I would someday go to college."
            },
            {
                "chinese": "这是我人生的开始。",
                "english": "This was a start in my life."
            },
            {
                "chinese": "十七年之后，我真的上了大学。但是我很天真地选择了一所几乎和斯坦福一样贵的学校，我的父母都是蓝领阶层，他们倾其所有资助我的学业。在六个月后，我已经看不到上学的价值。我不知道我真正想要什么，也不知道大学如何能帮我找到答案。",
                "english": "And 17 years later I did go to college. But I naively chose a college that was almost as expensive as Stanford, and all of my working-class parents'savings were being spent on my college tuition. After six months, I couldn't see the value in it. I had no idea what I wanted to do with my life and no idea how college was going to help me figure it out."
            },
            {
                "chinese": "而我在这里上学，几乎花光了父母这一辈子的积蓄。所以我决定退学，相信车到山前必有路。我那时很害怕，但现在看来，那是我人生中做得最正确的决定。我退学的那一刻，就再也不用上毫无兴趣的必修课，然后我开始旁听那些我喜欢的课。",
                "english": "And here I was spending all of the money my parents had saved their entire life. So I decided to drop out and trust that it would all work out OK. It was pretty scary at the time, but looking back it was one of the best decisions I ever made. The minute I dropped out I could stop taking the required classes that didn't interest me, and begin dropping in on the ones that looked interesting."
            },
            {
                "chinese": "但是事情并没有想象的那样容易，我无处可住，只能睡在朋友宿舍的地板上，我去捡五美分的可乐罐，仅仅为了填饱肚子。每周日晚上，我走七英里的路，穿过小镇，只为能在 Krishna 教堂(注：位于纽约 Brooklyn 下城)吃顿像样的饭菜。我乐此不疲。这些跟随好奇心和直觉所做的事情后来都被证明是无价之宝，我给你们举个例子：",
                "english": "It wasn't all romantic. I didn't have a dorm room, so I slept on the floor in friends' rooms, I returned coke bottles for the 5¢ deposits to buy food with, and I would walk the 7 miles across town every Sunday night to get one good meal a week at the Hare Krishna temple. I loved it. And much of what I stumbled into by following my curiosity and intuition turned out to be priceless later on. Let me give you one example:"
            },
            {
                "chinese": "那时的里德大学拥有也许是全美最好的书法课。校园里的海一幅海报，每一个抽屉的标签都是漂亮的美术字。因为我退学了不必去上必修课，所以我决定去学一门书法课，学习怎么写出这样的字体。",
                "english": "Reed College at that time offered perhaps the best calligraphy instruction in the country. Throughout the campus every poster, every label on every drawer, was beautifully hand calligraphed. Because I had dropped out and didn't have to take the normal classes, I decided to take a calligraphy class to learn how to do this."
            },
            {
                "chinese": "我学到衬线和无衬线字体，英文字母组合的间距规则，学到了是什么让这些印刷体变得如此美丽。那种美感，给人的历史感和艺术享受，是科学无法捕捉到的。我被完全吸引了。",
                "english": "I learned about serif and san serif typefaces, about varying the amount of space between different letter combinations, about what makes great typography great. It was beautiful, historical, artistically subtle in a way that science can't capture. And I found it fascinating."
            },
            {
                "chinese": "当时看起来这些东西好像对我的人生来说没有任何实用价值。但是十年之后，当我们在设计第一台 Macintosh 电脑的时候，它一下子浮现了出来。我们将这些东西全部设计进了 Mac ，于是漂亮的印刷体第一次出现在电脑上。如果我当年没有旁听这一门课，苹果就不会有如此丰富的字体以及漂亮的字间距。",
                "english": "None of this had even a hope of any practical application in my life. But ten years later, when we were designing the first Macintosh computer, it all came back to me. And we designed it all into the Mac. It was the first computer with beautiful typography. If I had never dropped in on that single course in college, the Mac would have never had multiple typefaces or proportionally spaced fonts."
            },
            {
                "chinese": "鉴于微软只知道抄袭苹果，估计没有个人电脑会有这些。如果我没有退学，没有旁听这门书法课，也许个人电脑就不会有如此美丽的印刷体。当然在大学的时候我不可能预见到它们之间的联系，但在10年之后回首往事 一切都非常非常明了。",
                "english": "And since Windows just copied the Mac, its likely that no personal computer would have them. If I had never dropped out, I would have never dropped in on this calligraphy class, and personal computers might not have the wonderful typography that they do. Of course it was impossible to connect the dots looking forward when I was in college. But it was very, very clear looking backwards ten years later."
            },
            {
                "chinese": "同样的，你们也无法预知未来，只有回头看时才会发现它们的关系，所以你必须相信你现在获得的点滴会在未来连结起来。你必须相信一些东西：直觉、命运、人生、因果，什么都没关系，因为如果你相信这些点滴会连接起你未来的道路，你就会拥有跟随自己内心的自信，即使你的选择不被主流认同，这将使一切都变得不一样。",
                "english": "Again, you can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. Because believing in the dots will connect down the road will give you the confidence to follow your heart even when they leave you off the well-worn path. And it has made all the difference."
            },
            {
                "chinese": "我的第二个故事是关于爱和损失的。",
                "english": "[2] My second story is about love and loss."
            },
            {
                "chinese": "我很幸运，我在人生很早的时候就找到了喜欢做的事情。在我20岁的时候，沃茨和我 在我父母在车库里面开创了苹果公司。我们努力地工作，用了仅仅 10 年时间，苹果就从车库里的两个穷小子发展成超过 4000 人价值 数十亿的公司。那个时候我们最棒的产品—— Macintosh 刚刚推出一年，而我刚刚 30 岁，这时我被解雇了。",
                "english": "I was lucky. I found what I loved to do early in life. Woz and I started apple in my parents garage when I was 20. We worked hard, and in 10 years apple had grown from just the two of us in a garage into a billion company with over 4000 employees. We just released our finest creation - the Macintosh - a year earlier, and I had just turned 30 and then I got fired."
            },
            {
                "chinese": "你怎么可能被自已创立的公司解雇呢？在苹果成长的时候，我们请了一个我当时认为很有才能的家伙和我一起运作公司，第一年一切都限顺利。但后来我们对未来的看法开始出现分歧，我们吵翻了。而这时董事会站在了他那一边。所以在30时我被开除了，而且是非常公开地开除了。我整个成年生活的重心突然丢失了，这是个致命的打击。",
                "english": "How can you get fired from a company you started？ Well, as apple grew we hired someone who I thought was very talented to run the company with me, and for the first year or so things went well. But then our visions of the future began to diverge and eventually we had a falling out. When we did, our Board of Directors sided with him. So at 30 I was out. And very publicly out. What had been the focus of my entire adult life was gone, and it was devastating."
            },
            {
                "chinese": "有好几个月的时间我不知所措，我感到自己让上一代的创业者们失望了——我弄丢了他们的接力棒。我跟 David Packard 与 Bob Noyce 见面，试图为我的糟糕表现向他们道歉。",
                "english": "I really didn't know what to do for a few months. I felt that I had let the previous generation of entrepreneurs down - that I had dropped the baton as it was being passed to me. I met with David Packard and Bob Noyce and tried to apologize for screwing up so badly."
            },
            {
                "chinese": "我是一个众所周知的失败者，我甚至想过逃离硅谷。然而有一件事开始将我慢慢带回，那就是——我仍然爱着我所从事的行业。在苹果公司发生的这些风波丝毫没有改变这一点。我虽然被拒之门外，但是我仍深爱。于是我决定从头再来。",
                "english": "I was a very public failure, and I even thought about running away from the valley. But something slowly began to dawn on me – I still loved what I did. The turn of events at apple had not changed that one bit. I had been rejected, but I was still in love. And so I decided to start over."
            },
            {
                "chinese": "我当时没有意识到，但事实证明，离开苹果是我这辈子里发生的最好的事情。成功的沉重被重新出发的轻盈所代替，对一切都不再那么确定。这种自由感，让我进入了人生中最富创意的时期之一",
                "english": "I didn't see it then, but it turned out that getting fired from apple was the best thing that could have ever happened to me. The heaviness of being successful was replaced by the lightness of being a beginner again, less sure about everything. It freed me to enter one of the most creative periods of my life."
            },
            {
                "chinese": "在接下来的5年里， 我创立了一家名叫 NeXT 的公司和另一家名叫皮克斯的公司，爱上了一位了不起的女人——她后来成为了我的妻子。皮克斯制作了世界上第一个全电脑制作的动画电影《玩具总动员》，如今已是世界上最知名的动画工作室。",
                "english": "During the next five years, I started a company named NeXT, another company named Pixar, and fell in love with an amazing woman who would become my wife. Pixar went on to create the worlds first computer animated feature film, Toy Story, and is now the most successful animation studio in the world."
            },
            {
                "chinese": "在一次出人意料的事件转折中，苹果公司买下了 NeXT，我回到了苹果公司，我们在NeXT开发的技术成了是公司这次重新崛起的核心。我和劳伦娜(Laurene)也建立了美满的家庭。",
                "english": "In a remarkable turn of events, apple bought NeXT, I returned to apple, and the technology we developed at NeXT is at the heart of apple's current renaissance. And Laurene and I have a wonderful family together."
            },
            {
                "chinese": "我很确定，这一切都不会发生如果我没被苹果开除。这是一剂苦药，但我猜测病人需要它。有时候生活会给你当头一棒，不要失去信仰。我确信，唯一支撑着我一路走来的是我爱我所做的事，你必须找到你的真爱，对工作如此对爱人亦然。工作将占据你生活的很大一部分，而获得真正满足的唯一途径，就是做你认为伟大的工作。而做伟大工作的唯一途径，就是热爱你所做的事情。如果你还没有找到，继续寻找不要停下脚步，当全心全意寻找时，你在遇到它时你就会明白，就像那些美好的爱情，随着岁月的流逝愈加醇美。所以继续寻找直到你找到它，不要停下脚步。",
                "english": "I'm pretty sure none of this would have happened if I hadn't been fired from apple. It was awful tasting medicine, but I guess the patient needed it. Sometimes life hits you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did. You've got to find what you love. And that is as true for your work as it is for your lovers. Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on. So keep looking until you find it. Don't settle."
            },
            {
                "chinese": "我的第三个故事是关于死亡。",
                "english": "[3] My third story is about death."
            },
            {
                "chinese": "我17岁的时候读到过这样一句话:“如果你把每一天都当作是生命的最后一天，总有一天你会是对的。” 这话给我留下了深刻的印象。在那之后，在过去的的33年里，每天早晨我都对着镜子问自己：“如果今天是我生命中的最后一天我还会想做我今天要做的这些事吗？” 每当答案连续很多天都是“不”的时候，我就知道需要改变了。",
                "english": "When I was 17, I read a quote that went something like: \"If you live each day as if it was your last, someday you'll most certainly be right. \"It made an impression on me, and since then, for the past 33 years, I have looked in the mirror every morning and asked myself:\"If today were the last day of my life, would I want to do what I am about to do today？\"And whenever the answer has been\"No\" for too many days in a row, I know I need to change something."
            },
            {
                "chinese": "记住自己将会死亡是我遇到的最重要的工具，它帮助我做出了许多人生中的重要决定。因为几乎任何事，所有的外部的期望、所有的骄傲、对尴尬或失败的恐惧，一切都会在死亡面前淡去，只留下真正重要的东西。记住你将会死去，可以帮助你避开担心失去身外之物的恐惧。你已经一无所有，没有理由不去追随你的内心。",
                "english": "Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life. Because almost everything – all external expectations, all pride, all fear of embarrassment or failure - these things just fall away in the face of death, leaving only what is truly important. Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart."
            },
            {
                "chinese": "大约一年前我被诊断出患有癌症。我在早晨七点半做了一次扫描，清楚显示出我的胰腺里有个肿瘤。我之前连胰腺是什么都不知道，医生告诉我，胰腺癌基本上无法治愈，我可能只剩下三到六个月的时间。医生让我回家“安排一下自己的事情“，这是医生对所有临终病人的话，这意味着对于你的孩子们，你要把未来十年的话在几个月里说完，意味着做好所有的准备，让你的家人尽可能的轻松一些，意味着跟所有人说再见。",
                "english": "About a year ago I was diagnosed with cancer. I had a scan at 7:30 in the morning, and it clearly showed a tumor on my pancreas. I didn't even know what a pancreas was. The doctors told me this was almost certainly a type of cancer that is incurable, and that I should expect to live no longer than three to six months. My doctor advised me to go home and get my affairs in order, which is doctor's code for prepare to die. It means to try to tell your kids everything you thought you'd have the next 10 years to tell them in just a few months. It means to make sure everything is buttoned up so that it will be as easy as possible for your family. It means to say your goodbyes."
            },
            {
                "chinese": "我一整天都在想着这个诊断，那天傍晚我做了一个活体检查，医生将一个内窥镜伸进喉咙，通过我的胃进入肠道，用一根针在我的肿瘤上取了一些细胞，我当时是被麻醉的但妻子告诉我，当医生在显微镜下观察细胞的时候，他们喜极而泣，原来这是一种非常罕见的，可以通过手术治愈的癌症，我接受了这个手术现在我痊愈了",
                "english": "I lived with that diagnosis all day. Later that evening I had a biopsy, where they stuck an endoscope down my throat, through my stomach and into my intestines, put a needle into my pancreas and got a few cells from the tumor. I was sedated, but my wife, who was there, told me that when they viewed the cells under a microscope the doctors started crying because it turned out to be a very rare form of pancreatic cancer that is curable with surgery. I had the surgery and I'm fine now."
            },
            {
                "chinese": "这是我最接近死亡的时刻，希望这也是未来几十年里最近的一次。与死神擦肩而过，让我更加确信一点，因为对我来说死亡不再只是一个抽象的概念。",
                "english": "This was the closest I've been to facing death, and I hope its the closest I get for a few more decades. Having lived through it, I can now say this to you with a bit more certainty than when death was a useful but purely intellectual concept."
            },
            {
                "chinese": "没人愿意死，就算那些想上天堂的人也不想为此去死。但是死亡是每个人共同的终点，从来没有人能逃脱它。因为死亡就是生命最好的发明，是生命更迭的动力，它去除老旧、拥抱新生。现在你们就是新生的力量，但是用不了太久，你们会变成老旧然后被渐渐清除掉。抱歉说得夸张了点，但这都是事实。",
                "english": "No one wants to die. Even people who want to go to heaven don't want to die to get there. And yet death is the destination we all share. No one has ever escaped it. And that is as it should be, because Death is very likely the single best invention of Life. It is Life's change agent. It clears out the old to make way for the new. Right now the new is you, but someday not too long from now, you will gradually become the old and be cleared away. Sorry to be so dramatic, but it is quite true."
            },
            {
                "chinese": "光阴如梭，所以，不要浪费时间过你不想要的生活，不要被教条束缚，那意味着按照别人的想法生活，不要被世人的喧嚣掩盖了你的心声，还有最重要的，要有跟随你的内心和直觉的勇气，它们知道你想做一个什么样的人，其他的一切都是次要的。",
                "english": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of other's opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary."
            },
            {
                "chinese": "当我年轻的时候，有一本非常棒的杂志叫《全球概览》，它是我们那一代人的圣经之一。它的创办人叫 Stewart Brand，就在离这不远的 Menlo Park，他以艺术般的手法为刊物注入了生命。那是60年代末，早在在个人电脑出现以前，所以这本书完全是用打字机、剪刀还有老相机制作的，它就像书籍版的 Google，在 Google 出现的35年之前，它充斥着理想的色彩、简洁的工具和伟大的想法。",
                "english": "When I was young, there was an amazing publication called The Whole Earth Catalog, which was one of the bibles of my generation. It was created by a fellow named Stewart Brand not far from here in Menlo Park, and he brought it to life with his poetic touch. This was in the late 1960's, before personal computers and desktop publishing, so it was all made with typewriters, scissors, and polaroid cameras. It was sort of like Google in paperback form, 35 years before Google came along: it was idealistic, and overflowing with neat tools and great notions."
            },
            {
                "chinese": "Stewart 和他的伙伴出版了几期的《全球概览》，当它完成了自己使命的时候，他们出版了最后的一期。那是70年代中期，我正是你们现在的年纪，最后一期的封底上，是一幅清晨乡村公路的照片，是那种你去搭便车旅行就会看到的景色，照片下面有一句话“Stay Hungry. Stay Foolish.”这是他们停刊的告别语，“Stay Hungry. Stay Foolish.”。我总是以此自勉，在你们即将展开新的旅程之时，我将这句话也赠予你们，“Stay Hungry. Stay Foolish.”。",
                "english": "Stewart and his team put out several issues of The Whole Earth Catalog, and then when it had run its course, they put out a final issue. It was the mid-1970s, and I was your age. On the back cover of their final issue was a photograph of an early morning country road, the kind you might find yourself hitchhiking on if you were so adventurous. Beneath it were the words: \"Stay Hungry. Stay Foolish.\" It was their farewell message as they signed off. Stay Hungry. Stay Foolish. And I have always wished that for myself. And now, as you graduate to begin anew, I wish that for you."
            },
            {
                "chinese": "非常感谢大家。",
                "english": "Thank you all very much."
            }
        ]
    },
    // "article2": {
    //     "title": "The Benefits of Exercise",
    //     "content": [
    //         {"chinese": "定期锻炼对身体健康至关重要。", "english": "Regular exercise is crucial for physical health."},
    //         {"chinese": "它可以改善心血管功能，增强肌肉力量。", "english": "It can improve cardiovascular function and strengthen muscles."},
    //         {"chinese": "锻炼还能释放内啡肽，帮助我们减轻压力。", "english": "Exercise also releases endorphins, helping us reduce stress."}
    //     ]
    // },
    // "article3": {
    //     "title": "Technology and Society",
    //     "content": [
    //         {"chinese": "技术正在以前所未有的速度改变我们的社会。", "english": "Technology is changing our society at an unprecedented pace."},
    //         {"chinese": "智能手机已经成为人们日常生活中不可或缺的一部分。", "english": "Smartphones have become an indispensable part of people's daily lives."},
    //         {"chinese": "人工智能的发展既带来机遇也带来挑战。", "english": "The development of artificial intelligence brings both opportunities and challenges."}
    //     ]
    // }
};
