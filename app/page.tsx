import { CardClassroom } from '@/components/fragments/card/CardClassroom';
import { CardClassroomProduct } from '@/components/fragments/card/CardClassroomProduct';
import { CardCourseAuthor } from '@/components/fragments/card/CardCourseAuthor';
import { CardCourseMember } from '@/components/fragments/card/CardCourseMember';
import { CardCourseProduct } from '@/components/fragments/card/CardCourseProduct';
import { CardForumPost } from '@/components/fragments/card/CardForumPost';
import { ThemeSwitch } from '@/components/theme-switch';

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl p-3 lg:p-6">
      <div className="flex gap-6">
        <div>
          <p className="text-2xl font-bold leading-none">UNSRIT</p>
          <p className="text-xl font-bold leading-none">Connection</p>
        </div>
        <ThemeSwitch />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <CardClassroom
          data={{
            id: '1',
            author: 'Nadia Kamasi',
            title: 'Pemrograman Web',
            sks: 3,
            prodi: ['INFORMATIKA'],
          }}
        />
        <CardCourseMember
          data={{
            id: '1',
            title: 'Belajar Bahasa Pemrograman Javascript',
            progress: 50,
          }}
        />
        <CardCourseAuthor
          data={{ id: '1', title: 'Belajar Bahasa Pemrograman Javascript' }}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <CardCourseProduct
          data={{
            id: '1',
            title: 'Belajar Bahasa Pemrograman Javascript',
            author: 'Nadia Kamasi',
            imgUrl: '/assets/course.jpg',
            ratting: 5.0,
          }}
        />
        <CardCourseProduct
          data={{
            id: '2',
            title: 'Belajar Backend Menggunakan PHP 8',
            author: 'Aprildy Ferdinandus',
            imgUrl: '/assets/course2.jpg',
            ratting: 3.5,
          }}
        />
        <CardCourseProduct
          data={{
            id: '3',
            title: 'Belajar Gitlab Dasar',
            author: 'Tirsa Saruan',
            imgUrl: '/assets/course3.jpg',
            ratting: 4.2,
          }}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <CardClassroomProduct
          data={{
            id: '1',
            author: 'Nadia Kamasi',
            title: 'Pemrograman Web',
            sks: 3,
            prodi: ['INFORMATIKA'],
            bgColor: 'blue',
          }}
        />
        <CardClassroomProduct
          data={{
            id: '2',
            author: 'Santo Bumbungan',
            title: 'Kalkulus 2',
            sks: 3,
            prodi: ['TEKNIK SIPIL', 'INFORMATIKA'],
            bgColor: 'green',
          }}
        />
        <CardClassroomProduct
          data={{
            id: '3',
            author: 'Aprildy Ferdinandus',
            title: 'Pemrograman Berorientas Objek',
            sks: 4,
            prodi: ['INFORMATIKA'],
            bgColor: 'yellow',
          }}
        />
        <CardClassroomProduct
          data={{
            id: '4',
            author: 'Don Kabo',
            title: 'Aplikasi Komputer',
            sks: 1,
            prodi: ['SEMUA PRODI'],
            bgColor: 'red',
          }}
        />
      </div>

      <div className="mt-6">
        <CardForumPost />
      </div>
    </div>
  );
}
