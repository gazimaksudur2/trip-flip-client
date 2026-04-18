import { useForm } from 'react-hook-form';
import { FiMail } from 'react-icons/fi';
import { toast } from '../../lib/toast';
import Button from '../ui/Button';

const NewsLetter = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = () => {
    toast.success('Thanks for subscribing! We\'ll keep you updated.');
    reset();
  };

  return (
    <section className="bg-base-200 border-t-4 border-brand-500">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl font-jakarta">
            Subscribe to the <span className="text-brand-500">Newsletter</span>
          </h2>
          <p className="text-gray-600">
            Be the first to know when our new rooms and exclusive offers go live.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email address"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-500 ${errors.email ? 'border-error' : 'border-gray-300'}`}
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })}
              />
              {errors.email && <p className="text-xs text-error mt-1">{errors.email.message}</p>}
            </div>
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-48 h-48 bg-brand-100 rounded-full flex items-center justify-center">
            <FiMail className="text-brand-500" size={64} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
